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
        				<p>Evaluación sistemática y técnica que permite determinar los potenciales de ahorro de energía, según indicadores de gestión que no afecten la cantidad ni calidad de las actividades desarrolladas en la empresa.</p>
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
        				<p>En esta etapa se establecen normas de consumo de energía, de mantenimiento y de operación, así como el método que permita dar seguimiento permanente al programa.</p>
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