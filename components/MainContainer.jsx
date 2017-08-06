const React = require('react');
const Link = require('react-router').Link;

//Container component for the main page, stores the data that main page require
class MainContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            active: ""
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive(id){
        this.setState({active: id});
    }

    render() {
        return (
            <div>
        	<div id="carousel" className="carousel slide" data-ride="carousel">
        	  <ol className="carousel-indicators">
        	    <li data-target="#carousel" data-slide-to="0" className="active"></li>
        	    <li data-target="#carousel" data-slide-to="1"></li>
        	    <li data-target="#carousel" data-slide-to="2"></li>
        	    <li data-target="#carousel" data-slide-to="3"></li>
        	  </ol>
        	  <div className="carousel-inner" role="listbox">
        	    <div className="item active">
        	      <img src="/resources/images/slider1.jpg" alt="..."/>
        	    </div>
        	    <div className="item">
        	      <img src="/resources/images/slider2.jpg" alt="..."/>
        	    </div>
        	    <div className="item">
        	      <img src="/resources/images/slider3.jpg" alt="..."/>
        	    </div>
        	    <div className="item">
        	      <img src="/resources/images/slider4.jpg" alt="..."/>
        	    </div>
        	  </div>
        	  <a className="left carousel-control" href="#carousel" role="button" data-slide="prev">
        	    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        	    <span className="sr-only">Previous</span>
        	  </a>
        	  <a className="right carousel-control" href="#carousel" role="button" data-slide="next">
        	    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        	    <span className="sr-only">Next</span>
        	  </a>
        	</div>
            <div className="modules">
                <div className={this.state.active === 'energy' ? 'module-box active' : 'module-box'} onClick={this.setActive.bind(this, 'energy')}> 
                    <div className="title-container">
                        <h3>Módulo</h3>
                        <h2>Gestión Energética</h2>
                    </div>
                    <ul>
                        <li><Link className="link" to={'/diagnostic/'}>Diagnóstico</Link></li>
                        <li><Link className="link" to={'/'}>Monitoreo</Link></li>
                    </ul>
                </div>
                <div className={this.state.active === 'quality' ? 'module-box active' : 'module-box'} onClick={this.setActive.bind(this, 'quality')}>
                    <div className="title-container">
                        <h3>Módulo</h3>
                        <h2>Gestión De Calidad</h2>
                    </div>
                    
                </div>
                <div className={this.state.active === 'maintenance' ? 'module-box active' : 'module-box'}  onClick={this.setActive.bind(this, 'maintenance')}>
                    <div className="title-container">
                        <h3>Módulo</h3>
                        <h2>Gestión De Mantenimiento</h2>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
module.exports = MainContainer;