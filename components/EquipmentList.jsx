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
                    <div className="create-button-container">
                      <button className="btn btn-default pull-right" onClick={this.showCreateEquipmentModule}>Agregar Equipo</button>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-sm-12">
                        {this.props.equipmentList.map((equipment) => {
                            return <Equipment equipment={equipment} key={equipment._id} deleteEquipment={this.props.deleteEquipment} loadData={this.props.loadData}/>
                        })}
                    </div>
                    <CreateEquipment open={this.state.open} hideCreateEquipmentModule={this.hideCreateEquipmentModule} createEquipment={this.props.createEquipment} uploadImages={this.props.uploadImages}/>
                </div>
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