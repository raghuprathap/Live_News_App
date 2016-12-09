import React from 'react';

export default class FooterComponent extends React.Component{
	render(){
		return(
				<footer className="footerwrap">
    <div className="footerContainer">
      <div className="row">
        <div className="col-sm-2">
          <h6>Copyright &copy; 2013 Raghu </h6>
        </div>


        <div className="col-sm-4">
          <h6>About Us</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="col-sm-2">
          <h6>Navigation</h6>
          <ul className="unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Links</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="col-sm-2">
          <h6>Follow Us</h6>
          <ul className="unstyled">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google Plus</a></li>
          </ul>
        </div>

        <div className="col-sm-2">
        <h6>Coded with <span className="glyphicon glyphicon-heart"></span> </h6>
        </div>
      </div>
    </div>
  </footer>
			)
	}
}
