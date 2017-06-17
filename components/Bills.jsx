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
        	<div className="header-container">
        		<h2>Gestión Energética</h2>
        	</div>
        	<div className="create-button-container">
        	  <hr/>
        	  <button className="btn btn-default pull-right" onClick={this.showAddBillModule}>Agregar Factura</button>
        	  <div className="clearfix"></div>
        	</div>
        	<div className="col-sm-3 clients-circle">
				<div className="circle-container">
				  <div className="circle"></div>
				</div>
				<h4>Diagnóstico</h4>
				<span>Facturas</span>
				<hr/>
				<h4>ICafe</h4>
        	</div>
        	<div className="col-sm-9">
                <h2>Facturas</h2>
                <hr/>
        		<BillsDatatable bills={this.props.bills} deleteBill={this.props.deleteBill}/>
                 { this.state.open ? <CreateBill hideAddBillModule={this.hideAddBillModule} createBill={this.props.createBill}/> : null }
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