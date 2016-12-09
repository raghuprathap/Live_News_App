import React from 'react';
import reactDOM from 'react-dom';
import News from './News';
export default class NewsDisplay extends React.Component{
	render(){
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
};
