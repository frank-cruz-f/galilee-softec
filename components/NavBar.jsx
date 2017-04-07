const React = require('react');
const Link = require('react-router').Link;

//Navigation Bar component
class NavBar extends React.Component {
	constructor(){
		super();
		this.state = {categories: [], keyword: ""};
		this.handleChange = this.handleChange.bind(this);
	}	

	componentDidMount(){
		this.loadData();
	}

    render() {
        return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link to={'/'} className="navbar-brand">
                    <img src="/resources/images/logo_cyan_sm.png" alt=""/>
                  </Link>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                      <li><Link to={'/energy/'} role="button" activeClassName="active">Gestión Energética</Link></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }

    handleChange(e){
  		this.setState({[e.target.name]: e.target.value});
  	}

    loadData(){
    	/*let categoriesURL = common.services.GET_CATEGORIES;
    	fetch(categoriesURL, {method: 'get'})
    	.then((response) => {
    	  return response.json();
    	})
    	.then((responseJson) => {
    	  this.setState({categories: responseJson.data});
    	}).catch(function(err) {
    	  // Error :(
    	});*/
    }
}
module.exports = NavBar;
