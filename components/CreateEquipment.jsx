const React = require('react');
var Modal = require('react-bootstrap-modal');
var ImageUploader = require('./ImageUploader');
import Switch from 'react-bootstrap-switch';

//Container component for the main page, stores the data that main page require
class CreateEquipment extends React.Component {

     constructor(){
        super();
        this.state = {
            equipment:[
                {
                    brand:"",
                    model:"",
                    capacity:"",
                    picturesLinks:[]
                }
            ],
            voltage:"",
            monophase:"",
            mainSwitchCapacity:"",
            mainSwitchImages:[],
            electricDesignPlan:"",
            mainEquipmentManuals:"",
            equipmentOperationInfo:"",
            equipmentMaintenanceProgram:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveEquipment = this.saveEquipment.bind(this);
        this.clearState = this.clearState.bind(this);
        this.addEquipmentRow = this.addEquipmentRow.bind(this);
        this.removeEquipmentRow = this.removeEquipmentRow.bind(this);
     }

    saveEquipment(){
        var p1 = new Promise((resolve, reject) => { 
          this.props.uploadImages(this.state.mainSwitchImages, (result) => {
              this.setState({mainSwitchImages: result});
              resolve();
          });
        });

        var p2 = new Promise((resolve, reject) => { 
            var procesedEquips = 0;
          this.state.equipment.forEach((equip, index) => {
              this.props.uploadImages(equip.picturesLinks, (result) => {
                  var currentEquipment = this.state.equipment;
                  equip.picturesLinks = result;
                  currentEquipment[index] = equip;
                  this.setState({equipment: currentEquipment});
                  procesedEquips++;
                  if(procesedEquips === this.state.equipment.length){
                    resolve();
                    }
              });
          });
        });

        Promise.all([p1, p2]).then(response => {
            this.props.createEquipment(this.state);
            this.clearState();
            this.props.hideCreateEquipmentModule();
        });
    }

    clearState(){
        this.setState({
            equipment:[
                {
                    brand:"",
                    model:"",
                    capacity:"",
                    picturesLinks:""
                }
            ],
            voltage:"",
            monophase:"",
            mainSwitchCapacity:"",
            mainSwitchImages: "",           
            electricDesignPlan:"",
            mainEquipmentManuals:"",
            equipmentOperationInfo:"",
            equipmentMaintenanceProgram:""
        });
    }

    handleSwitch(elem, state){
        this.setState({[elem.props.name]: state});        
    }

    addEquipmentRow(){
        let currentEquipment = this.state.equipment;
        currentEquipment.push({brand:"", model: "", capacity:"", picturesLinks:[]});
        this.setState({equipment: currentEquipment});
    }

    removeEquipmentRow(e){
        let index = parseInt(e.target.getAttribute("data-equip-index"));//Looks for index attribute on the element that triggers the action
        if(this.state.equipment.length > 1){
            //filter out the ingredient with the same index as the element which started the action
            let currentEquipment = this.state.equipment.filter(function(equip, i){
                if(i !== index){
                    return equip;
                }
            });
            this.setState({equipment: currentEquipment});
        }
    }

    handleChange(e){
        let index = parseInt(e.target.getAttribute("data-equip-index"));
        if(!isNaN(index)){
            let equip = this.state.equipment[index];
            if(e.target.name === 'brand'){
                equip.brand = e.target.value;
            }
            else if(e.target.name === 'model'){
                equip.model = e.target.value;
            }
            else if(e.target.name === 'capacity'){
                equip.capacity = e.target.value;
            }
            let equipment = this.state.equipment;
            equipment[index] = equip;
            this.setState({equipment: equipment});
        }
        else{
            this.setState({[e.target.name]: e.target.value});
        }
    }

    render() {
        return (
        	<div>
        	<Modal show={this.props.open} aria-labelledby="ModalHeader" className="equipment-modal">
                <Modal.Header closeButton>
                    <Modal.Title id='ModalHeader'>Nuevo Equipo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset className="equipment list-box">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Interruptor Principal</h3>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <label className="control-label">Capacidad de interruptor principal</label>
                                        <input type="text" className="form-control" name="mainSwitchCapacity" value={this.state.mainSwitchCapacity} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <label className="control-label">Tipo</label><br/>
                                    <Switch onChange={(el, state) => this.handleSwitch(el, state)} name="monophase" onText="Monofásico" offText="Trifásico"/>
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <label className="control-label">Voltaje</label>
                                        <input type="text" className="form-control" name="voltage" value={this.state.voltage} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <ImageUploader imageHolder={(result) => { 
                                        this.setState({mainSwitchImages:result});
                                    }}></ImageUploader>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <h3>Principales Equipos</h3>
                                <div>
                                    <button className="btn btn-default" onClick={this.addEquipmentRow}><i className="fa fa-plus-square" aria-hidden="true"></i> Agregar otro equipo</button>                          
                                </div>
                                {this.state.equipment.map((equip, index) => 
                                <div key={index} className="col-sm-12">
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label className="control-label">Marca</label>
                                            <input type="text" className="form-control" name="brand" data-equip-index={index} value={equip.brand} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label className="control-label">Modelo</label>
                                            <input type="text" className="form-control" name="model" data-equip-index={index} value={equip.model} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label className="control-label">Capacidad</label>                                    
                                            <input type="text" className="form-control" name="capacity" data-equip-index={index} value={equip.capacity} onChange={this.handleChange}/>
                                            <p>Si no hay dato de placa</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-1">
                                        <button type="button" className="btn btn-danger" onClick={this.removeEquipmentRow} data-equip-index={index}><i className="fa fa-trash-o" aria-hidden="true" data-index={index}></i></button>
                                    </div>
                                    <div className="col-sm-12">
                                        <ImageUploader imageHolder={(result) => { 
                                            equip.picturesLinks = result;
                                        }}></ImageUploader>
                                    </div>
                                    <div className="col-sm-12">
                                        <hr/>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p>Seleccione las siguientes opciones, por favor solicitar copia fisica o digital para cualquier opción si la respuesta es afirmativa.</p>
                            </div>
                        </div>
                        <div className="row equipment-options">
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene planos del diseño eléctrico?</label></div>
                                <div className="col-sm-4"><Switch onChange={(el, state) => this.handleSwitch(el, state)} defaultValue={false} name="electricDesignPlan" onText="Si" offText="No"/></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene manuales de los principales equipos consumidores?</label></div>
                                <div className="col-sm-4"><Switch onChange={(el, state) => this.handleSwitch(el, state)} defaultValue={false} name="mainEquipmentManuals" onText="Si" offText="No"/></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene información demostrable de horas de funcionamiento de los equipos?</label></div>
                                <div className="col-sm-4"><Switch onChange={(el, state) => this.handleSwitch(el, state)} defaultValue={false} name="equipmentOperationInfo" onText="Si" offText="No"/></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene información demostrable de programa de mantenimiento de los equipos?</label></div>
                                <div className="col-sm-4"><Switch onChange={(el, state) => this.handleSwitch(el, state)} defaultValue={false} name="equipmentMaintenanceProgram" onText="Si" offText="No"/></div>
                            </div>
                        </div>
                        <span className="clearfix"></span>
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-default' onClick={this.props.hideCreateEquipmentModule}>Cancelar</button>
                    <button className='btn btn-primary' onClick={this.saveEquipment}>Guardar</button>
                </Modal.Footer>
            </Modal>
        	</div>
        )
    }
}

CreateEquipment.propTypes = {
  hideCreateEquipmentModule: React.PropTypes.func,
  createEquipment: React.PropTypes.func
};

module.exports = CreateEquipment;