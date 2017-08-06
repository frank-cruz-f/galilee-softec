import React from 'react';
import Modal from 'react-bootstrap-modal';
import Datetime from 'react-datetime';
import moment from 'moment';
require('moment/locale/ES');

//Container component for the main page, stores the data that main page require
class CreateBill extends React.Component {

     constructor(){
        super();
        this.state = {
            period : "",
            consumption: "",
            provider: "",
            cost: "",
            comments: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveBill = this.saveBill.bind(this);
        this.clearState = this.clearState.bind(this);
        this.cancel = this.cancel.bind(this);
     }

    saveBill(){
        this.props.createBill(this.state);
        this.props.hideAddBillModule();
        this.clearState();
    }

    cancel(){
        this.clearState();
        this.props.hideAddBillModule();
    }

    clearState(){
        this.setState({
            period : "",
            consumption: "",
            provider: "",
            cost: "",
            comments: "",
            consumptionUnity: "",
            consumptionType: "",
            consumptionFee: "",
            productionUnity: ""
        });
    }

    handleChange(e){
        if(e._isAMomentObject){
            this.setState({period: e.toISOString()});
        }
        else{
            this.setState({[e.target.name]: e.target.value});
        }
        
    }

    render() {
        return (
            <div className="function-add">
        	<div className="row">
                <div className="col-sm-12">
                    <h2>Factura</h2>
                    <hr/>
                </div>
        	   <div className="col-sm-3">
                <div className="form-group">
                            <label className="control-label">Periodo</label>
                            <Datetime dateFormat="MMMM YYYY" name="period" onChange={this.handleChange} closeOnSelect={true}/>
                        </div>
               </div>
               <div className="col-sm-3">
                <div className="form-group">
                            <label className="control-label">Consumo</label>
                            <input type="text" className="form-control" name="consumption" value={this.state.consumption} onChange={this.handleChange}/>
                        </div>
               </div>
               <div className="col-sm-3">
                    <div className="form-group">
                            <label className="control-label">Unid. de Consumo</label>
                            <select name="" id="" className="form-control" name="consumptionUnity" value={this.state.consumptionUnity} onChange={this.handleChange}>
                                <option value="">--</option>
                                <option value="l">litros</option>
                                <option value="kw">kw</option>
                                <option value="kwh">kwh</option>
                                <option value="fp">fp.</option>
                                <option value="m3">m3</option>
                            </select>
                    </div>
                </div>
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Tipo de Consumo</label>
                            <select name="" id="" className="form-control" name="consumptionType" value={this.state.consumptionType} onChange={this.handleChange}>
                                <option value="">--</option>
                                <option value="gas">gas</option>
                                <option value="bunker">bunker</option>
                                <option value="diesel">diesel</option>
                                <option value="gasolina">gasolina</option>
                                <option value="madera">madera</option>
                                <option value="agua">agua</option>
                                <option value="electricidad">electricidad</option>
                            </select>
                    </div>
               </div>
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Tarifa</label>
                            <select name="" id="" className="form-control" name="consumptionFee" value={this.state.consumptionFee} onChange={this.handleChange}>
                                <option value="">--</option>
                                <option value="T-CO">T-CO</option>
                                <option value="T-IN">T-IN</option>
                                <option value="T-CS">T-CS</option>
                                <option value="T-R">T-R</option>
                                <option value="T-MT">T-MT</option>
                            </select>
                    </div>
               </div>
               <div className="col-sm-3">
                <div className="form-group">
                            <label className="control-label">Proveedor</label>
                            <select name="" id="" className="form-control" name="provider" value={this.state.provider} onChange={this.handleChange}>
                                <option value="">--</option>
                                <option value="Jasec">Jasec</option>
                                <option value="ICE">ICE</option>
                                <option value="CNFL">CNFL</option>
                                <option value="AyA">AyA</option>
                            </select>
                        </div>
               </div>
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Unid. de Prod. 1</label>
                            <input type="text" className="form-control" name="productionUnity1" value={this.state.productionUnit1} onChange={this.handleChange}/>
                    </div>
               </div>
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Producción 1</label>
                            <input type="text" className="form-control" name="productionQuantity1" value={this.state.productionQuantity1} onChange={this.handleChange}/>
                    </div>
               </div>
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Unid. de Prod. 2</label>
                            <input type="text" className="form-control" name="productionUnity2" value={this.state.productionUnit2} onChange={this.handleChange}/>
                    </div>
               </div>
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Producción 2</label>
                            <input type="text" className="form-control" name="productionQuantity2" value={this.state.productionQuantity2} onChange={this.handleChange}/>
                    </div>
               </div>
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Costo</label>
                            <input type="text" className="form-control" name="cost" value={this.state.cost} onChange={this.handleChange}/>
                        </div>
               </div>
               <div className="col-sm-3">
                <div className="form-group">
                            <label className="control-label">Comentarios</label>
                            <textarea className="form-control" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
                        </div>
               </div>
               </div>
               <div className="row">
                <div className="col-sm-12">
                    <div className="pull-right">
                    <button className="btn btn-default" onClick={this.cancel}>Cancelar</button>
                    <button className="btn btn-primary" onClick={this.saveBill}>Guardar</button>
                    </div>                    
                </div>
               </div>
               </div>
        )
    }
}

CreateBill.propTypes = {
  hideAddBillModule: React.PropTypes.func,
  createBill: React.PropTypes.func
};

module.exports = CreateBill;