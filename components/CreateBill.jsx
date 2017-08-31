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
            comments: "",
            consumptionUnit: "",
            consumptionType: "",
            consumptionFee: "",
            productionUnit: "",
            biomassType:"",
            createOptions: {
              showTextProvider: false,
              showFee:false,
              consumptionUnitOptions: [],
              showProvider: false,
              showBiomassType: false
            }
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
            consumptionUnit: "",
            consumptionType: "",
            consumptionFee: "",
            productionUnit1: "",
            productionUnit2: "",
            productionQuantity1: "",
            productionQuantity2: "",
            createOptions: {
              showTextProvider: false,
              showFee:false,
              consumptionUnitOptions: [],
              showProvider: false,
              showBiomassType: false
            }
        });
    }

    handleChange(e){
        if(e._isAMomentObject){
            this.setState({period: e.toISOString()});
        }
        else if(e.target.name === "consumptionType"){
            this.setState({[e.target.name]: e.target.value});
            if(e.target.value === "Electricidad"){
              this.setState({"createOptions": {
                showFee: true,
                consumptionUnitOptions: [
                  "N/A",
                  "KWH",
                  "KW",
                  "F.P."
                ],
                showTextProvider:false,
                showProvider: true,
                showBiomassType: false
              }})
            }
            else if(e.target.value === "Gas"){
              this.setState({"createOptions": {
                showFee: false,
                consumptionUnitOptions: [
                  "N/A",
                  "L",
                  "M3"
                ],
                showTextProvider:true,
                showProvider: true,
                showBiomassType: false
              }})
            }
            else if(e.target.value === "Agua"){
              this.setState({"createOptions": {
                showFee: false,
                consumptionUnitOptions: [
                  "M3"
                ],
                showTextProvider:true,
                showProvider: true,
                showBiomassType: false
              }})
            }
            else if(e.target.value === "Diesel" || e.target.value === "Bunker"){
              this.setState({"createOptions": {
                showFee: false,
                consumptionUnitOptions: [
                  "N/A",
                  "L"
                ],
                showTextProvider:false,
                showProvider: false,
                showBiomassType: false
              }})
            }
              else if(e.target.value === "Biomasa"){
              this.setState({"createOptions": {
                showFee: false,
                consumptionUnitOptions: [
                  "N/A",
                  "M3"
                ],
                showTextProvider:true,
                showProvider: true,
                showBiomassType: true
              }})
            }
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
                  <label className="control-label">Tipo de Factura</label>
                  <select name="consumptionType" id="" className="form-control" value={this.state.consumptionType} onChange={this.handleChange}>
                    <option>--</option>
                    <option value="Electricidad">Electricidad</option>
                    <option value="Gas">Gas</option>
                    <option value="Agua">Agua</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Bunker">Bunker</option>
                    <option value="Biomasa">Biomasa</option>
                  </select>
                 </div>
               </div>
               {this.state.createOptions.showBiomassType && <div className="col-sm-3">
               <div className="form-group">
               <label className="control-label">Tipo de biomasa</label>
               <input type="text" className="form-control" name="biomassType" value={this.state.biomassType} onChange={this.handleChange}/>
               </div>
               </div>
               }
               <div className="col-sm-3">
                <div className="form-group">
                            <label className="control-label">Consumo</label>
                            <input type="text" className="form-control" name="consumption" value={this.state.consumption} onChange={this.handleChange}/>
                        </div>
               </div>
               <div className="col-sm-3">
                    <div className="form-group">
                            <label className="control-label">Unid. de Consumo</label>
                            <select className="form-control" name="consumptionUnit" value={this.state.consumptionUnit} onChange={this.handleChange}>
                                {this.state.createOptions.consumptionUnitOptions.map((option) => {
                                  return <option value={option}>{option}</option>
                                })}
                            </select>
                    </div>
                </div>
               {this.state.createOptions.showFee && <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Tarifa</label>
                            <select className="form-control" name="consumptionFee" value={this.state.consumptionFee} onChange={this.handleChange}>
                                <option value="">--</option>
                                <option value="T-CO">T-CO</option>
                                <option value="T-IN">T-IN</option>
                                <option value="T-CS">T-CS</option>
                                <option value="T-R">T-R</option>
                                <option value="T-MT">T-MT</option>
                            </select>
                    </div>
               </div>
               }
               {this.state.createOptions.showProvider && <div className="col-sm-3">
                <div className="form-group">
                            <label className="control-label">Proveedor</label>
                            {!this.state.createOptions.showTextProvider && <select id="" className="form-control" name="provider" value={this.state.provider} onChange={this.handleChange}>
                                <option value="">--</option>
                                <option value="ICE">ICE</option>
                                <option value="CNFL">CNFL</option>
                                <option value="JASEC">JASEC</option>
                                <option value="ESPH">ESPH</option>
                                <option value="COOPELESCA">COOPELESCA</option>
                                <option value="COOPEGUANACASTE">COOPEGUANACASTE</option>
                                <option value="COOPEALFARO">COOPEALFARO</option>
                                <option value="COOPESANTOS">COOPESANTOS</option>

                                ICE, CNFL, JASEC, ESPH, COOPELESCA, COOPEGUANACASTE, COOPEALFARO, COOPESANTOS
                            </select>
                            }

                            {this.state.createOptions.showTextProvider && <input type="text" className="form-control" name="provider" value={this.state.provider} onChange={this.handleChange}/>}
                        </div>
               </div>
               }
               <div className="col-sm-3">
               <div className="form-group">
                            <label className="control-label">Unid. de Prod. 1</label>
                            <input type="text" className="form-control" name="productionUnit1" value={this.state.productionUnit1} onChange={this.handleChange}/>
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
                            <input type="text" className="form-control" name="productionUnit2" value={this.state.productionUnit2} onChange={this.handleChange}/>
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