const React = require('react');

//Container component for the main page, stores the data that main page require
class Clients extends React.Component {
    render() {
        return (
        	<div>
        	<div className="header-container">
        		<h2>Gestión Energética</h2>
        	</div>
        	<div className="col-sm-2 clients-circle">
				<div className="circle-container">
				  <div className="circle"></div>
				</div>
				<h4>Diagnóstico</h4>
				<span>Clientes</span>
        	</div>
        	<div className="col-sm-10">
	
        	</div>
        	</div>
        )
    }
}
module.exports = Clients;