const React = require('react');
import {Typeahead} from 'react-bootstrap-typeahead';

//Container component for the main page, stores the data that main page require
class Clients extends React.Component {
    constructor(){
        super();

    }

    render() {
        return (
        	<div>
                <div className="module">
                    <div className="module-title-container">
                        <div className="module-title">
                            <h3>Módulo</h3>
                            <h2>GESTIÓN ENERGÉTICA</h2>
                            <h2>Diágnostico</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="function-container">
                    <Typeahead
                      onChange={this._handleChange}
                      options={this.props.clients}
                      selected={selected}
                    />
                </div>
        	</div>
        )
    }
}
module.exports = Clients;