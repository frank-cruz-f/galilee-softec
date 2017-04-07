const NavBar = require('./NavBar');
const MainContainer = require("./MainContainer");
const Energy = require('./Energy');
const Clients = require('./Clients');
const Bills = require('./Bills');
const Equipment = require('./Equipment');
const Results = require('./Results');

const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
}


ReactDOM.render(
  //Router for the app, handles the URL changes to display the proper component
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainContainer}/>
      <Route path="energy/" component={Energy}>
        <Route path="diagnostic/clients" component={Clients}></Route>
        <Route path="diagnostic/bills" component={Bills}></Route>
        <Route path="diagnostic/equipment" component={Equipment}></Route>
        <Route path="diagnostic/results" component={Results}></Route>
      </Route>
    </Route>
  </Router>, document.getElementById('root'))