var React = require('react');
var reactDOM = require('react-dom');
var BbcBox = require('./BbcBox');
var BbcNewsDisplay = React.createClass({
	render: function(){
		var NewsComponent = this.props.newsData.map(function(news){
			return(<BbcBox newsData={news}>

			</BbcBox>
			);
			
		}.bind(this));
		return(
		<div className="BbcNewsDisplay">
		{NewsComponent}
		</div>
		);
	}
});
module.exports=BbcNewsDisplay