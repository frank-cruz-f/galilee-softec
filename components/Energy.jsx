const React = require('react');
const Link = require('react-router').Link;

//Container component for the main page, stores the data that main page require
class Energy extends React.Component {
    render() {
        return (
        	<div>
        		<div className="header-container">
        			<h2>Gestión Energética</h2>
        		</div>
        		<div className="function-container">
        			<div className="function diagnostic">
        				<div className="circle-container">
        				  <div className="circle"></div>
        				</div>
        				<h3>Diagnóstico</h3>
        				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue id tellus at sollicitudin. Curabitur mi tellus, tempus at nulla nec, pretium imperdiet nunc. Praesent at massa sit amet purus rutrum hendrerit.</p>
        				<div id="diagnostic-collapse" className="collapse">
							<Link className="link" to={'/diagnostic/clients'}>Clientes</Link>
							<Link className="link" to={'/diagnostic/bills'}>Facturas</Link>
							<Link className="link" to={'/diagnostic/equipment'}>Equipos</Link>
							<Link className="link" to={'/diagnostic/results'}>Resultados</Link>
        				</div>
        				<a href="#diagnostic-collapse" data-toggle="collapse"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
        			</div>
        			<div className="function monitoring">
        				<div className="circle-container">
        				  <div className="circle"></div>
        				</div>
        				<h3>Monitoreo</h3>
        				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue id tellus at sollicitudin. Curabitur mi tellus, tempus at nulla nec, pretium imperdiet nunc. Praesent at massa sit amet purus rutrum hendrerit.</p>
        				<div id="monitoring-collapse" className="collapse">
							<Link className="link" to={'/energy/monitoring/audit'}>Auditoría</Link>
        				</div>
        				<a href="#monitoring-collapse" data-toggle="collapse"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
        			</div>
        		</div>
        	</div>
        )
    }
}
module.exports = Energy;