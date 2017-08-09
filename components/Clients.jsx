const React = require('react');
const CreateClient = require("./CreateClient")
import {Typeahead} from 'react-bootstrap-typeahead';

//Container component for the main page, stores the data that main page require
class Clients extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false
        };
        this.showCreateClient = this.showCreateClient.bind(this);
        this.hideCreateClient = this.hideCreateClient.bind(this);
    }

    showCreateClient(){
        this.setState({open:true});
    }

    hideCreateClient(){
        this.setState({open:false});
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
                  <div className="form-group">
                    <div className="row form-inline">
                        <div className="col-sm-8">
                            <div className="input-group">
                                <h2 className="function-title">Buscar cliente: </h2>
                            </div>
                            <div className="input-group">
                              <Typeahead
                                className="typeahead form-control"
                                labelKey="name"
                                minLength={0}
                                onChange={this._handleChange}
                                options={this.props.clients}/>
                            </div>
                            <div className="input-group">
                                <button className="btn btn-primary pull-left">Seleccionar</button>
                            </div>
                            <div className="input-group">
                                <button className="btn btn-default" onClick={this.showCreateClient}>Agregar Cliente</button>
                            </div>
                        </div>
                    </div>
                    
                    
                  </div>
                    
                    
                </div>
                <CreateClient open={this.state.open} hideCreateClientModule={this.hideCreateClient} createClient={this.props.createClient}/>
        	</div>
        )
    }
}
Clients.propTypes = {
  createClient: React.PropTypes.func,
  loadData: React.PropTypes.func
};
module.exports = Clients;