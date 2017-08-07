const React = require('react');
const common = require('../common');
const Clients = require("./Clients");

//Container component for the main page, stores the data that main page require
class ClientsContainer extends React.Component {
	constructor(){
		super();
		this.state = { clients: [] };

        this.createClient = this.createClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
        this.loadData = this.loadData.bind(this);
	}

	componentDidMount(){
		this.loadData();
	}

    render() {
        return (
        	<Clients clients={this.state.clients} createClient={this.createClient} deleteClient={this.deleteClient} loadData={this.loadData}/>
        );
    }

    createClient(clientData){
        var clientsURL = common.services.CREATE_BILL;

        fetch(clientsURL, {
            method: 'post', 
            body: JSON.stringify(clientData),
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

    deleteClient(clientId){
        var clientsURL = common.services.DELETE_BILL.replace("{clientId}", clientId);

        fetch(clientsURL, {
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
    	var clientsURL = common.services.GET_CLIENTS;

    	fetch(clientsURL, {method: 'get'})
    	.then((response) => {
    	  return response.json();
    	})
    	.then((responseJson) => {
    	  this.setState({clients: responseJson.data});
    	}).catch(function(err) {
    	  // Error :(
    	});
    }
}
module.exports = ClientsContainer;