const React = require('react');
const LightboxModule = require('./LightboxModule');
import Switch from 'react-bootstrap-switch';
class Equipment extends React.Component {
    constructor(){
        super();
        this.state = {
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
            electricDesignPlan:"",
            mainEquipmentManuals:"",
            equipmentOperationInfo:"",
            equipmentMaintenanceProgram:""
        };

        this.deleteEquipment = this.deleteEquipment.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    deleteEquipment(){
        this.props.deleteEquipment(this.props.equipment._id);
    }

    cancelChanges(){
        this.setState(this.props.equipment);
    }

    componentDidMount(){
        this.setState({
            equipment:this.props.equipment.equipment,
            monophase: this.props.equipment.monophase,
            mainSwitchCapacity: this.props.equipment.mainSwitchCapacity,
            mainSwitchImages: this.props.equipment.mainSwitchImages,
            capacity: this.props.equipment.capacity,
            electricDesignPlan: this.props.equipment.electricDesignPlan,
            mainEquipmentManuals: this.props.equipment.mainEquipmentManuals,
            equipmentOperationInfo: this.props.equipment.equipmentOperationInfo,
            equipmentMaintenanceProgram: this.props.equipment.equipmentMaintenanceProgram,
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
            <fieldset className="equipment list-box">
                            <div className="col-sm-12">
                                <h3>Interruptor Principal</h3>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label className="control-label">Capacidad de int. princ.</label>
                                        <input type="text" className="form-control" name="mainSwitchCapacity" value={this.state.mainSwitchCapacity} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <label className="control-label">Tipo</label><br/>
                                    <Switch onChange={(el, state) => this.handleSwitch(el, state)} name="monophase" onText="Monofásico" offText="Trifásico"/>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label className="control-label">Voltaje</label>
                                        <input type="text" className="form-control" name="voltage" value={this.state.voltage} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <LightboxModule images={this.state.mainSwitchImages}></LightboxModule>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <h3>Principales Equipos</h3>
                                {this.state.equipment.map((equip, index) => 
                                <div key={index} className="col-sm-12">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label className="control-label">Marca</label>
                                            <input type="text" className="form-control" name="brand" data-equip-index={index} value={equip.brand} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label className="control-label">Modelo</label>
                                            <input type="text" className="form-control" name="model" data-equip-index={index} value={equip.model} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label className="control-label">Capacidad</label>                                    
                                            <input type="text" className="form-control" name="capacity" data-equip-index={index} value={equip.capacity} onChange={this.handleChange}/>
                                            <p>Si no hay dato de placa</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <LightboxModule images={equip.picturesLinks}></LightboxModule>
                                    </div>
                                    <div className="col-sm-12">
                                        <hr/>
                                    </div>
                                </div>
                                )}
                            </div>
                        <div className="col-sm-12">
                                <p>Seleccione las siguientes opciones, por favor solicitar copia fisica o digital para cualquier opción si la respuesta es afirmativa.</p>
                            </div>
                        <div className="row equipment-options">
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene planos del diseño eléctrico?</label></div>
                                <div className="col-sm-4"><Switch defaultValue={this.props.equipment.electricDesignPlan} name="electricDesignPlan" onText="Si" offText="No" disabled={true}/></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene manuales de los principales equipos consumidores?</label></div>
                                <div className="col-sm-4"><Switch defaultValue={this.props.equipment.mainEquipmentManuals} name="mainEquipmentManuals" onText="Si" offText="No" disabled={true}/></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene información demostrable de horas de funcionamiento de los equipos?</label></div>
                                <div className="col-sm-4"><Switch defaultValue={this.props.equipment.equipmentOperationInfo} name="equipmentOperationInfo" onText="Si" offText="No" disabled={true}/></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-sm-8"><label className="control-label">¿Tiene información demostrable de programa de mantenimiento de los equipos?</label></div>
                                <div className="col-sm-4"><Switch defaultValue={this.props.equipment.equipmentMaintenanceProgram} name="equipmentMaintenanceProgram" onText="Si" offText="No" disabled={true}/></div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-danger" onClick={this.deleteEquipment}><i className="fa fa-trash-o" aria-hidden="true"></i> Borrar</button>
                        </div>
                        <span className="clearfix"></span>
                </fieldset>
            </div>
        )
    }
}

Equipment.propTypes = {
  deleteEquipment: React.PropTypes.func
};

module.exports = Equipment;