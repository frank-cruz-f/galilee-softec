import ReactTable from 'react-table';
import React from 'react';
import moment from 'moment';
require('moment/locale/ES');

class BillsDatatable extends React.Component {
	constructor(){
		super();

		this.deleteBill = this.deleteBill.bind(this);
	}

	deleteBill(e){
		var billId = e.target.getAttribute("data-bill-id");
		if(billId){
			this.props.deleteBill(billId);
		}
	}

    render() {	 
	  const columns = [{
	    Header: 'Periodo',
	    accessor: 'period',
	    Cell: row => (moment(row.value).format("MMM YYYY"))
	  }, {
	    Header: 'Consumo',
	    accessor: 'consumption',
	    filterable: false
	  }, {
	    Header: 'Unidad de Consumo',
	    accessor: 'consumptionUnit'
	  }, {
	    Header: 'Tipo de Consumo',
	    accessor: 'consumptionType',
	    filterable: false
	  }, {
	    Header: 'Tarifa',
	    accessor: 'consumptionFee',
	    filterable: false
	  }, {
	    Header: 'Unid de Prod 1',
	    accessor: 'productionUnit1',
	    filterable: false
	  }, {
	    Header: 'Producción 1',
	    accessor: 'productionQuantity1',
	    filterable: false
	  }, {
	    Header: 'Unid de Prod 2',
	    accessor: 'productionUnit2',
	    filterable: false
	  }, {
	  	Header: 'Producción 2',
	    accessor: 'productionQuantity2',
	    filterable: false
	  }, {
	    Header: 'Proveedor',
	    accessor: 'provider'
	  }, {
	    Header: 'Costo',
	    accessor: 'cost',
	    filterable: false
	  }, {
	    Header: 'Comentarios',
	    accessor: 'comments',
	    filterable: false
	  }, {
	    Header: "",
	    accessor: '_id',
	    Cell: row => (
	    	<button onClick={this.deleteBill} data-bill-id={row.value} className="btn btn-danger"><i className="fa fa-trash"></i></button>
	    ),
	    filterable: false
	  }];
	 
	  return (<ReactTable data={this.props.bills} className="datatable" columns={columns} minRows={this.props.bills.length} showPagination={false} filterable={true}/>)
	}
}

BillsDatatable.propTypes = {
	deleteBill: React.PropTypes.func
}

module.exports = BillsDatatable;