const React = require('react');

class Bill extends React.Component {
    constructor(){
        super();
        this.state = {
            period : "",
            consumption: "",
            provider: "",
            cost: "",
            comments: ""
        };

        this.deleteBill = this.deleteBill.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    deleteBill(){
        this.props.deleteBill(this.props.bill._id);
    }

    cancelChanges(){
        this.setState(this.props.bill);
    }

    componentDidMount(){
        this.setState({
            period : this.props.bill.period,
            consumption: this.props.bill.consumption,
            provider: this.props.bill.provider,
            cost: this.props.bill.cost,
            comments:this.props.bill.comments
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
        	<div>
        	<fieldset className="bill list-box">
                    <span className="title">{this.props.bill.period}</span>
                    <div className="row pull-right action-buttons">
                        <button className="btn btn-danger" onClick={this.deleteBill}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
                    <div className="col-sm-4 col-sm-offset-2">                      
                        <div className="form-group">
                            <label className="control-label">Periodo</label>
                            <input type="text" className="form-control" name="period" value={this.state.period} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Consumo</label>
                            <input type="text" className="form-control" name="consumption" value={this.state.consumption} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Comentarios</label>
                            <textarea className="form-control" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="control-label">Proveedor</label>
                            <input type="text" className="form-control" name="provider" value={this.state.provider} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Costo</label>
                            <input type="text" className="form-control" name="cost" value={this.state.cost} onChange={this.handleChange}/>
                        </div>                              
                    </div>
                    <div className="clearfix"></div>
                    <div className="row pull-right action-buttons">
                        <button className="btn btn-default" onClick={this.cancelChanges}><i className="fa fa-ban" aria-hidden="true"></i> Cancelar</button>                      
                        <button className="btn btn-primary"><i className="fa fa-floppy-o" aria-hidden="true"></i> Salvar</button>                       
                    </div>
                    <span className="clearfix"></span>
                </fieldset>
        	</div>
        )
    }
}

Bill.propTypes = {
  deleteBill: React.PropTypes.func
};

module.exports = Bill;