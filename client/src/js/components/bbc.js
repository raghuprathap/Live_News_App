var React = require('react');
var ReactDOM=require('react-dom');
var BbcNewsDisplay = require('./BbcNewsDisplay');
var bbc = React.createClass({
  getInitialState : function()
{
  return{
    data : []
};
},

  BbcNews :function()
  {

       console.log("inside data method");
       $.ajax({
       url:"https://newsapi.org/v1/articles?apiKey=f39060f94afe4e489b2b3390997ffa48&source=bbc-news",
       type: 'GET',
       dataType: 'JSON',

       success: function(data)
       { console.log("inside success");
         this.setState({data:data.articles});
        }.bind(this),
       error: function(err)
       {

         console.log(err);
       }.bind(this)
     });

  },
  componentDidMount : function()
  {
    this.BbcNews();
  },

  render: function(){
    return (
      <div>
     <BbcNewsDisplay newsData={this.state.data}/>

    </div>

    )
  }
});
module.exports = bbc;
