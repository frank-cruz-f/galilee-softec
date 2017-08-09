const React = require('react');
const common = require('../common');
const EquipmentList = require("./EquipmentList");
import request from 'superagent';

//Container component for the main page, stores the data that main page require
class EquipmentContainer extends React.Component {
	constructor(){
		super();
		this.state = { equipmentList: [] };

        this.createEquipment = this.createEquipment.bind(this);
        this.loadData = this.loadData.bind(this);
        this.uploadImages = this.uploadImages.bind(this);
	}

	componentDidMount(){
		this.loadData();
	}

    render() {
        return (
        	<EquipmentList uploadImages={this.uploadImages} equipmentList={this.state.equipmentList} createEquipment={this.createEquipment} deleteEquipment={this.deleteEquipment} loadData={this.loadData}/>
        );
    }

    createEquipment(equipmentData){
        var equipmentURL = common.services.CREATE_EQUIPMENT;

        fetch(equipmentURL, {
            method: 'post', 
            body: JSON.stringify(equipmentData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          this.loadData();
        }).catch(function(err) {
          // Error :(
        });
    }

    deleteEquipment(equipmentId){
        var equipmentURL = common.services.DELETE_EQUIPMENT.replace("{equipmentId}", equipmentId);

        fetch(equipmentURL, {
            method: 'delete'
        })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          this.loadData();
        }).catch(function(err) {
          // Error :(
        });
    }

    //Retrieves the data from server and then load it in the component state.
    loadData(){
    	var equipmentURL = common.services.GET_EQUIPMENT_LIST;

    	fetch(equipmentURL, {method: 'get'})
    	.then((response) => {
    	  return response.json();
    	})
    	.then((responseJson) => {
    	  this.setState({equipmentList: responseJson.data});
    	}).catch(function(err) {
    	  // Error :(
    	});
    }

    uploadImages(images, callback){
        var result = [];
        var imagesProcessed = 0;
        if(images != ""){
            images.forEach(img => {
                
                let upload = request.post(common.services.CLOUDINARY_UPLOAD_URL)
                                .field('upload_preset', common.services.CLOUDINARY_UPLOAD_PRESET)
                                .field('file', img);

                upload.end((err, response) => {
                  if (err) {
                    console.error(err);
                  }

                  if (response.body.secure_url !== '') {
                    imagesProcessed++;
                    result.push(response.body.url);
                    if(imagesProcessed === images.length){
                        callback(result);
                    }
                  }
                });
                
            });
        }
        else{
            callback(result);
        }
    }
}
module.exports = EquipmentContainer;