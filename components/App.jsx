const NavBar = require('./NavBar');
const MainContainer = require("./MainContainer");
const Diagnostic = require('./Diagnostic');
const ClientsContainer = require('./ClientsContainer');
const BillsContainer = require('./BillsContainer');
const EquipmentContainer = require('./EquipmentContainer');
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
      <Route path="diagnostic" component={Diagnostic}></Route>
      <Route path="diagnostic/clients" component={ClientsContainer}></Route>
      <Route path="diagnostic/bills" component={BillsContainer}></Route>
      <Route path="diagnostic/equipment" component={EquipmentContainer}></Route>
      <Route path="diagnostic/results" component={Results}></Route>
    </Route>
  </Router>, document.getElementById('root'))