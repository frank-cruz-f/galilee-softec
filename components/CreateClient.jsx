const React = require('react');
const ClientMap = require('./ClientMap');
var Modal = require('react-bootstrap-modal');

//Container component for the main page, stores the data that main page require
class CreateEquipment extends React.Component {

     constructor(){
        super();
        this.state = {
            name:"",
            productionUnit:"",
            direction: "",
            location:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveClient = this.saveClient.bind(this);
        this.clearState = this.clearState.bind(this);
     }

    saveClient(){
        this.props.createClient(this.state);
        this.clearState();
        this.props.hideCreateClientModule();
    }

    clearState(){
        this.setState({
            name:"",
            productionUnit:"",
            direction: "",
            location:""
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
        	<div>
        	<Modal show={this.props.open} aria-labelledby="ModalHeader" className="equipment-modal">
                <Modal.Header closeButton>
                    <Modal.Title id='ModalHeader'>Nuevo Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset className="equipment list-box">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Información</h3>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <label className="control-label">Nombre</label>
                                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <label className="control-label">Unid. de Prod.</label>
                                        <input type="text" className="form-control" name="productionUnit" value={this.state.productionUnit} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <label className="control-label">Unid. de Prod.</label>
                                        <input type="text" className="form-control" name="direction" value={this.state.direction} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="control-label">Localización</label>
                                        <ClientMap/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="clearfix"></span>
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-default' onClick={this.props.hideCreateClientModule}>Cancelar</button>
                    <button className='btn btn-primary' onClick={this.saveClient}>Guardar</button>
                </Modal.Footer>
            </Modal>
        	</div>
        )
    }
}

CreateEquipment.propTypes = {
  hideCreateClientModule: React.PropTypes.func,
  createClient: React.PropTypes.func
};

module.exports = CreateEquipment;