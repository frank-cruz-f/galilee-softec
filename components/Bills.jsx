const React = require('react');

//Container component for the main page, stores the data that main page require
class Bills extends React.Component {
    render() {
        return (
        	<div>
        	<div className="header-container">
        		<h2>Gestión Energética</h2>
        	</div>
        	<div className="create-button-container">
        	  <hr/>
        	  <button className="btn btn-default pull-right" data-toggle="modal" data-target="#myModal">Agregar Factura</button>
        	  <div className="clearfix"></div>
        	</div>
        	<div className="col-sm-3 clients-circle">
				<div className="circle-container">
				  <div className="circle"></div>
				</div>
				<h4>Diagnóstico</h4>
				<span>Facturas</span>
				<hr/>
				<h4>ICafe</h4>
        	</div>
        	<div className="col-sm-9">
				<fieldset className="bill list-box">
					<span className="title">Agosto 2016</span>
					<div className="row pull-right action-buttons">
						<button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
					</div>
					<div className="col-sm-4 col-sm-offset-2">						
						<div className="form-group">
						    <label className="control-label">Periodo</label>
						    <input type="text" className="form-control" id="recipient-name" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
						    <label className="control-label">Consumo</label>
						    <input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
							<label className="control-label">Comentarios</label>
							<textarea className="form-control" id="message-text"></textarea>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="form-group">
						  	<label className="control-label">Proveedor</label>
						  	<input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
						  	<label className="control-label">Costo</label>
						  	<input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>								
					</div>
					<div className="clearfix"></div>
					<div className="row pull-right action-buttons">
						<button className="btn btn-default"><i className="fa fa-ban" aria-hidden="true"></i> Cancelar</button>						
						<button className="btn btn-primary"><i className="fa fa-floppy-o" aria-hidden="true"></i> Salvar</button>						
					</div>
					<span className="clearfix"></span>
        		</fieldset>
        		<fieldset className="bill list-box">
					<span className="title">Julio 2016</span>
					<div className="row pull-right action-buttons">
						<button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
					</div>
					<div className="col-sm-4 col-sm-offset-2">						
						<div className="form-group">
						    <label className="control-label">Periodo</label>
						    <input type="text" className="form-control" id="recipient-name" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
						    <label className="control-label">Consumo</label>
						    <input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
							<label className="control-label">Comentarios</label>
							<textarea className="form-control" id="message-text"></textarea>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="form-group">
						  	<label className="control-label">Proveedor</label>
						  	<input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
						  	<label className="control-label">Costo</label>
						  	<input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>								
					</div>
					<div className="clearfix"></div>
					<div className="row pull-right action-buttons">
						<button className="btn btn-default"><i className="fa fa-ban" aria-hidden="true"></i> Cancelar</button>						
						<button className="btn btn-primary"><i className="fa fa-floppy-o" aria-hidden="true"></i> Salvar</button>						
					</div>
					<span className="clearfix"></span>
        		</fieldset>
        		<fieldset className="bill list-box">
					<span className="title">Junio 2016</span>
					<div className="row pull-right action-buttons">
						<button className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
					</div>
					<div className="col-sm-4 col-sm-offset-2">						
						<div className="form-group">
						    <label className="control-label">Periodo</label>
						    <input type="text" className="form-control" id="recipient-name" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
						    <label className="control-label">Consumo</label>
						    <input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
							<label className="control-label">Comentarios</label>
							<textarea className="form-control" id="message-text"></textarea>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="form-group">
						  	<label className="control-label">Proveedor</label>
						  	<input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>
						<div className="form-group">
						  	<label className="control-label">Costo</label>
						  	<input type="text" className="form-control" id="message-text" defaultValue="Datos de Prueba"/>
						</div>								
					</div>
					<div className="clearfix"></div>
					<div className="row pull-right action-buttons">
						<button className="btn btn-default"><i className="fa fa-ban" aria-hidden="true"></i> Cancelar</button>						
						<button className="btn btn-primary"><i className="fa fa-floppy-o" aria-hidden="true"></i> Salvar</button>						
					</div>
					<span className="clearfix"></span>
        		</fieldset>
        	</div>
        	<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        	  <div className="modal-dialog" role="document">
        	    <div className="modal-content">
        	      <div className="modal-header">
        	        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        	        <h4 className="modal-title" id="myModalLabel">Nueva Factura</h4>
        	      </div>
        	      <div className="modal-body">
        	        <fieldset className="bill list-box">
						<div className="form-group">
						    <label className="control-label">Periodo</label>
						    <input type="text" className="form-control" id="recipient-name"/>
						</div>
						<div className="form-group">
						    <label className="control-label">Consumo</label>
						    <input type="text" className="form-control" id="message-text"/>
						</div>
						<div className="form-group">
						  	<label className="control-label">Proveedor</label>
						  	<input type="text" className="form-control" id="message-text"/>
						</div>
						<div className="form-group">
						  	<label className="control-label">Costo</label>
						  	<input type="text" className="form-control" id="message-text"/>
						</div>
						<div className="form-group">
							<label className="control-label">Comentarios</label>
							<textarea className="form-control" id="message-text"></textarea>
						</div>
					<span className="clearfix"></span>
        		</fieldset>
        	      </div>
        	      <div className="modal-footer">
        	        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        	        <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
        	      </div>
        	    </div>
        	  </div>
        	</div>
        	</div>
        )
    }
}
module.exports = Bills;