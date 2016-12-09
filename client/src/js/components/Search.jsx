import React from 'react';
import Select from 'react-select';
import BbcNewsDisplay from './BbcNewsDisplay';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {newsData:[], providerName : "BBC", newsDataForProvider: []};
	}
	
	NewsProviderSelectionHandler(e){
		console.log(e.value);
		this.setState({providerName:e.value});
		this.getNewsOfaProvider(e.id);
	}
	getNewsOfaProvider(id){
		$.ajax({
			url:"https://newsapi.org/v1/articles?apiKey=f39060f94afe4e489b2b3390997ffa48&source=" + id,
			type: 'GET',
			dataType: 'JSON',

			success: function(data)
			{ console.log("inside success");
			this.setState({newsDataForProvider:data.articles});
		}.bind(this),
		error: function(err)
		{

			console.log(err);
		}.bind(this)
	});
	}
	componentDidMount(){
		$.ajax({
			url:"https://newsapi.org/v1/sources?language=en",
			type: 'GET',
			dataType: 'JSON',
			success: function(data) {
				var newsDataOptions = [];
				data.sources.map(function(news){
					newsDataOptions.push({value:news.name, label:news.name, url:news.url, id:news.id});
				})
				this.setState({newsData:newsDataOptions});
			}.bind(this),
			error: function(err) {
				console.log(err);
			}.bind(this)
		});
	}

	render(){
		console.log(this.state.newsData);
		return(
			<div>
			<div className="form-group">
			<label>
			News Provider
			</label>
			<Select className="newsDropdown"
			name="form-field-name"
			value={this.state.providerName}
			options={this.state.newsData}
			onChange={
				this.NewsProviderSelectionHandler.bind(this)}
				></Select>
				</div>
				<BbcNewsDisplay newsData={this.state.newsDataForProvider}/>
				</div>
				);
			}
		}

