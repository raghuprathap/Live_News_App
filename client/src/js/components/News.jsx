import React from 'react';

export default class News extends React.Component{
	render(){
		return (
    <div className="news">
            <h2 className="newsName"> </h2>
            <div className="well">
                <div className="row">
                    <div className="col-4">
                        <img className="thumbnail" src={this.props.newsData.urlsToLogos.medium}/>
                    </div>
                      <div className="col-8">
                          
                          <ul className='list-group description'>
                            <li> <h4 className="head">{this.props.newsData.name}</h4> </li>
                              <li className='list-group-item'>Desciption : {this.props.newsData.description}</li>
                              <li className ="openNews">  <a className="btn btn-primary " target="_blank" href={this.props.newsData.url} > Open </a> </li>
                          </ul>
                         
                      </div>
                </div>
            </div>
        </div>
);
	}
};
