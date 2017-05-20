const React = require('react');
import Lightbox from 'react-image-lightbox';
class LightboxModule extends React.Component{
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
 
    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;
 
        return (
            <div>
                {this.props.images && this.props.images.length > 0 && <button
                    type="button"
                    className="btn btn-default"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Mostrar Fotos
                </button>}
 
                {isOpen &&
                    <Lightbox
                        mainSrc={this.props.images[photoIndex]}
                        nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
                        prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % this.props.images.length,
                        })}
                    />
                }
            </div>
        );
    }
}

module.exports = LightboxModule;