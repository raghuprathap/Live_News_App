var React = require('react');
var {browserHistory} = require('react-router');

var LogOut = React.createClass({
LogedUser: function()
{
  $.ajax({
    url:"/logout",
    type: 'GET',
    datatype: 'JSON',
    data:this.state,
    success: function(res)
    {
        console.log("log out");
        //browserHistory.push('/');
    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
},
componentWillMount: function()
{
  this.LogedUser();
}
,
  render: function(){
    return(
      <div>
        <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="jumbotron">
                  <h2>
                    You are logged Out successfully
                  </h2>
                </div>
              </div>
            </div>
          </div>
      </div>


    );
  }
})

module.exports=LogOut;
