var React = require('react');
var {render} = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var NavBarComponent = require('./components/NavBarComponent');
var Home = require('./components/Home');
var Login = require('./components/Login');
var LogOut = require('./components/LogOut');
var bbc= require('./components/bbc.js');

var MainComponent = React.createClass({
  render: function()
  {
    return(
      <div className="MainComponent">
      <NavBarComponent/>
      <br/><br/><br/>
      {this.props.children}
      </div>
  );
  }
})

render(
  <Router history={browserHistory}>
      <Route path="/" component={MainComponent} >
        <IndexRoute component={Login}/>
        <Route path="home" component={Home} />
        <Route path="logout" component={LogOut}/>
        <Route path = "/bbc" component={bbc} />
      </Route>
</Router>,document.getElementById('app'));
