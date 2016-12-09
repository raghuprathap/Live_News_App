import React from 'react';
import {Link} from 'react-router';
import Select from 'react-select';

export default class NavBarComponent extends React.Component{

  
    render() {
      return(
      <div className="NavBarComponent">
        <div className="navbar navbar-fixed-top">
          <div className="container">
            <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="nav-collapse collapse navbar-responsive-collapse">
              <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Login</Link></li>
              <li><Link to="/home">Home</Link></li>
              <li>
              
              </li>
              <li><Link to ="/search">Search Provider</Link></li>
              <li><Link to="/logout">LogOut</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      );
    }
  };

