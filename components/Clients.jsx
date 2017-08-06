const React = require('react');

//Container component for the main page, stores the data that main page require
class Clients extends React.Component {
    render() {
        return (
        	<div>
                <div className="module">
                    <div className="module-title-container">
                        <div className="module-title">
                            <h3>Módulo</h3>
                            <h2>GESTIÓN ENERGÉTICA</h2>
                            <h2>Diánostico en gestión energética</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
        	</div>
        )
    }
}
module.exports = Clients;