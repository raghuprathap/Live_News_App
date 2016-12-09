import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Route, Router, IndexRoute} from 'react-router';

import NavBarComponent from './components/NavBarComponent';
import Home from './components/Home';
import Login from './components/Login';
import LogOut from './components/LogOut';
import bbc from './components/bbc';
import FooterComponent from './components/FooterComponent';
import search from './components/Search';

export default class MainComponent extends React.Component{
  render()
  {
    return(
      <div>
      <div className="MainComponent">
      <NavBarComponent/>
      <br/><br/><br/>
      {this.props.children}
      </div>
      <div className="FooterComponent">
      <FooterComponent />
      </div>
      </div>
      );
  }
}

render(
  <Router history={browserHistory}>
      <Route path="/" component={MainComponent} >
        <IndexRoute component={Login}/>
        <Route path="home" component={Home} />
        <Route path="logout" component={LogOut}/>
        <Route path = "/search" component={search} />
      </Route>
</Router>,document.getElementById('app'));

