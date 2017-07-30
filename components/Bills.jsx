const React = require('react');
const CreateBill = require("./CreateBill");
const Bill = require("./Bill");
const BillsDatatable = require("./BillsDatatable");

//Container component for the main page, stores the data that main page require
class Bills extends React.Component {
	constructor(){
		super();
		this.state = {
			open: false
		};

		this.showAddBillModule = this.showAddBillModule.bind(this);
		this.hideAddBillModule = this.hideAddBillModule.bind(this);

	}

	showAddBillModule(){
		this.setState({open:true});
	}

	hideAddBillModule(){
		this.setState({open:false});
	}

    render() {
        return (
            <div>
                <div className="module">
                    <div className="module-title-container">
                        <div className="module-title">
                            <h3>Módulo</h3>
                            <h2>GESTIÓN ENERGÉTICA</h2>
                            <h2>Diánostico</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="function-container">
                    <h2 className="function-title">Facturas</h2>
                    <div className="create-button-container">
                      <hr/>
                      <button className="btn btn-default pull-right" onClick={this.showAddBillModule}>Agregar Factura</button>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-sm-12 table-container">
                        <BillsDatatable bills={this.props.bills} deleteBill={this.props.deleteBill}/>
                         { this.state.open ? <CreateBill className="function-add" hideAddBillModule={this.hideAddBillModule} createBill={this.props.createBill}/> : null }
                    </div>
                </div>
            </div>
        	
        )
    }
}

Bills.propTypes = {
  createBill: React.PropTypes.func,
  deleteBill: React.PropTypes.func,
  loadData: React.PropTypes.func
};

module.exports = Bills;