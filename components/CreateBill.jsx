const React = require('react');
var Modal = require('react-bootstrap-modal');

//Container component for the main page, stores the data that main page require
class CreateBill extends React.Component {

     constructor(){
        super();
        this.state = {
            period : "",
            consumption: "",
            provider: "",
            cost: "",
            comments: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveBill = this.saveBill.bind(this);
        this.clearState = this.clearState.bind(this);
     }

    saveBill(){
        this.props.createBill(this.state);
        this.clearState();
        this.props.hideAddBillModule();
    }

    clearState(){
        this.setState({
            period : "",
            consumption: "",
            provider: "",
            cost: "",
            comments: ""
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
        	<div>
        	<Modal show={this.props.open} aria-labelledby="ModalHeader">
                <Modal.Header closeButton>
                    <Modal.Title id='ModalHeader'>Nueva Factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset className="bill list-box">
                        <div className="form-group">
                            <label className="control-label">Periodo</label>
                            <input type="text" className="form-control" name="period" value={this.state.period} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Consumo</label>
                            <input type="text" className="form-control" name="consumption" value={this.state.consumption} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Proveedor</label>
                            <input type="text" className="form-control" name="provider" value={this.state.provider} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Costo</label>
                            <input type="text" className="form-control" name="cost" value={this.state.cost} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Comentarios</label>
                            <textarea className="form-control" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
                        </div>
                        <span className="clearfix"></span>
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-default' onClick={this.props.hideAddBillModule}>Cancelar</button>
                    <button className='btn btn-primary' onClick={this.saveBill}>Guardar</button>
                </Modal.Footer>
            </Modal>
        	</div>
        )
    }
}

CreateBill.propTypes = {
  hideAddBillModule: React.PropTypes.func,
  createBill: React.PropTypes.func
};

module.exports = CreateBill;