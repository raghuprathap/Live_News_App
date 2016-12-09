import React from 'react';
import reactDOM from 'react-dom';
import BbcBox from './BbcBox';
export default class BbcNewsDisplay extends React.Component{
	render(){
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
};
