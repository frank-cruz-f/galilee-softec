const React = require('react');

//Container component for the main page, stores the data that main page require
class MainContainer extends React.Component {
    render() {
        return (
        	<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        	  <ol className="carousel-indicators">
        	    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        	    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        	    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        	    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        	  </ol>
        	  <div className="carousel-inner" role="listbox">
        	    <div className="item active">
        	      <img src="/resources/images/slider1.jpg" alt="..."/>
        	      <div className="carousel-caption">
        	      	Energy Management
        	      </div>
        	    </div>
        	    <div className="item">
        	      <img src="/resources/images/slider2.jpg" alt="..."/>
        	      <div className="carousel-caption">
        	      	Internet of Things
        	      </div>
        	    </div>
        	    <div className="item">
        	      <img src="/resources/images/slider3.jpg" alt="..."/>
        	      <div className="carousel-caption">
        	      	Coffee Monitoring
        	      </div>
        	    </div>
        	    <div className="item">
        	      <img src="/resources/images/slider4.jpg" alt="..."/>
        	      <div className="carousel-caption">
        	      	Coffee Monitoring
        	      </div>
        	    </div>
        	  </div>
        	  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        	    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        	    <span className="sr-only">Previous</span>
        	  </a>
        	  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        	    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        	    <span className="sr-only">Next</span>
        	  </a>
        	</div>
        )
    }
}
module.exports = MainContainer;