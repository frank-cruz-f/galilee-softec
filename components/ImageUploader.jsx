import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class ImageUploader extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      uploadedImages: []
	    };

	    this.deleteUploadedFile = this.deleteUploadedFile.bind(this);

	}

    onImageDrop(files) {
	    this.setState({
	      uploadedImages: files
	    });

	    //this.handleImageUpload(files);
	    this.props.imageHolder(files);
  	}

    handleImageUpload(files) {
    	/*files.forEach(file => {
			let upload = request.post(CLOUDINARY_UPLOAD_URL)
	                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
	                        .field('file', file);

		    upload.end((err, response) => {
		      if (err) {
		        console.error(err);
		      }

		      if (response.body.secure_url !== '') {
		        
		      }
		    });
    	});*/
	    
  	}

  	deleteUploadedFile(fileName){
  		var files = this.state.uploadedImages.filter((imageFile) => imageFile.name != fileName);
  		this.setState({uploadedImages: files});
  		this.props.imageHolder(files);
  	}

  	render() {
    	return (
    		<div>
		      	<Dropzone
		      		multiple={true}
		      		accept="image/*"
		      		onDrop={this.onImageDrop.bind(this)}
		      		className="dropzone"
		      		>
		      		<p>Arrastrar las imagenes o click para seleccionar</p>	      		
		    	</Dropzone>

		    	<div className="imgs-preview-container">
		    		{this.state.uploadedImages.map((file) => <div className="img-preview-container" key={file.name}><img className="img-preview" src={file.preview} /><button className="delete-icon" onClick={() => {this.deleteUploadedFile(file.name)}}><i className="fa fa-times" aria-hidden="true"></i></button></div>)}
		    	</div>
	    	</div>
	    )
  	}
}

ImageUploader.propTypes = {
  imageHolder: React.PropTypes.func,
};

module.exports = ImageUploader;