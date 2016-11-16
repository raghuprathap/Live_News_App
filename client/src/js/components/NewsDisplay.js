var React = require('react');
var reactDOM = require('react-dom');
var News = require('./News');
var NewsDisplay = React.createClass({
	render: function(){
		var NewsComponent = this.props.newsData.map(function(news){
			return(<News newsData={news}>

			</News>
			);
			
		}.bind(this));
		return(
		<div className="NewsDisplay">
		{NewsComponent}
		</div>
		);
	}
});
module.exports=NewsDisplay