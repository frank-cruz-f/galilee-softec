const React = require('react');
const ImageUploader = require("./ImageUploader");
const CreateEquipment = require("./CreateEquipment");
const Equipment = require("./Equipment");
//Container component for the main page, stores the data that main page require
class EquipmentList extends React.Component {

    constructor(){
        super();
        this.state = {
            open: false
        };

        this.showCreateEquipmentModule = this.showCreateEquipmentModule.bind(this);
        this.hideCreateEquipmentModule = this.hideCreateEquipmentModule.bind(this);

    }

    showCreateEquipmentModule(){
        this.setState({open:true});
    }

    hideCreateEquipmentModule(){
        this.setState({open:false});
    }

    render() {
        return (
            <div>
            <div className="header-container">
                <h2>Gestión Energética</h2>
            </div>
            <div className="create-button-container">
              <hr/>
              <button className="btn btn-default pull-right" onClick={this.showCreateEquipmentModule}>Agregar Equipo</button>
              <div className="clearfix"></div>
            </div>
            <div className="col-sm-2 clients-circle">
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <h4>Diagnóstico</h4>
                <span>Equipos</span>
            </div>
            <div className="col-sm-10">
            </div>
            <div className="col-sm-9">
                {this.props.equipmentList.map((equipment) => {
                    return <Equipment equipment={equipment} key={equipment._id} deleteEquipment={this.props.deleteEquipment} loadData={this.props.loadData}/>
                })}
            </div>
            <CreateEquipment open={this.state.open} hideCreateEquipmentModule={this.hideCreateEquipmentModule} createEquipment={this.props.createEquipment} uploadImages={this.props.uploadImages}/>
            </div>
        )
    }
}

EquipmentList.propTypes = {
  createEquipment: React.PropTypes.func,
  deleteEquipment: React.PropTypes.func,
  loadData: React.PropTypes.func,
  uploadImages: React.PropTypes.func
};

module.exports = EquipmentList;