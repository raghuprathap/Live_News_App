var React = require('react');
var {Link} = require('react-router');


var NavBarComponent = React.createClass({

    render:function()
    {
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
              <li><Link to ="/bbc">BBC NEWS</Link></li>
              <li><Link to="/logout">LogOut</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      );
    }
  });

module.exports = NavBarComponent;
