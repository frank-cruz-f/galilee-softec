const React = require('react');
const Link = require('react-router').Link;

//Container component for the main page, stores the data that main page require
class Diagnostic extends React.Component {
    render() {
        return (
        	<div className="module">
                <div className="module-title-container">
                    <div className="module-title">
                        <h3>Módulo</h3>
                        <h2>GESTIÓN ENERGÉTICA</h2>
                        <h2>Diánostico en gestión energética</h2>
                        <hr/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <Link className="link function-button" to={'/diagnostic/clients/'}>Clientes</Link>
                </div>
                <div className="col-sm-6">
                    <Link className="link function-button" to={'/diagnostic/equipment/'}>Equipos</Link>
                </div>
                <div className="col-sm-6">
                    <Link className="link function-button" to={'/diagnostic/bills/'}>Facturas</Link>
                </div>
                <div className="col-sm-6">
                    <Link className="link function-button" to={'/diagnostic/results/'}>Informe</Link>
                </div>
        	</div>
        )
    }
}
module.exports = Diagnostic;