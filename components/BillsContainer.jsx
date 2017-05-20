const React = require('react');
const common = require('../common');
const Bills = require("./Bills");

//Container component for the main page, stores the data that main page require
class BillsContainer extends React.Component {
	constructor(){
		super();
		this.state = { billsList: [] };

        this.createBill = this.createBill.bind(this);
        this.loadData = this.loadData.bind(this);
	}

	componentDidMount(){
		this.loadData();
	}

    render() {
        return (
        	<Bills bills={this.state.billsList} createBill={this.createBill} deleteBill={this.deleteBill} loadData={this.loadData}/>
        );
    }

    createBill(billData){
        var billsURL = common.services.CREATE_BILL;

        fetch(billsURL, {
            method: 'post', 
            body: JSON.stringify(billData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          this.loadData();
        }).catch(function(err) {
          // Error :(
        });
    }

    deleteBill(billId){
        var billsURL = common.services.DELETE_BILL.replace("{billId}", billId);

        fetch(billsURL, {
            method: 'delete'
        })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          this.loadData();
        }).catch(function(err) {
          // Error :(
        });
    }

    //Retrieves the data from server and then load it in the component state.
    loadData(){
    	var billsURL = common.services.GET_BILLS;

    	fetch(billsURL, {method: 'get'})
    	.then((response) => {
    	  return response.json();
    	})
    	.then((responseJson) => {
    	  this.setState({billsList: responseJson.data});
    	}).catch(function(err) {
    	  // Error :(
    	});
    }
}
module.exports = BillsContainer;