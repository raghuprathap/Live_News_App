var React = require('react');
var NavBarComponent = require('./NavBarComponent');
var NewsDisplay = require('./NewsDisplay');
var Home = React.createClass({

  getInitialState: function(){
    return {newsData:[]};
  },
  getNewsArticlesFromSources: function(){
    $.ajax({
    url:"https://newsapi.org/v1/sources?language=en",
    type: 'GET',
    dataType: 'JSON',
    success: function(data)
    {
      this.setState({newsData:data.sources});
    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
  },

  render: function(){
    return(
      <div>
        <div className="container-fluid">
          	<div className="row">
          		<div className="col-md-12">
          			<div className="jumbotron">
          				<h2>
          					Hello, News World!
          				</h2>
          				<p>
          					Search articles from News sources
          				</p>
                  <p>
          					<a className="btn btn-primary btn-large" onClick = {this.getNewsArticlesFromSources} >Search News</a>
          				</p>
                  
          			</div>
          		</div>
          	</div>
          </div>
          <NewsDisplay newsData={this.state.newsData}/>
      </div>

    );
  }
})

module.exports=Home;
