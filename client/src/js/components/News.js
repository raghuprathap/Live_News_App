var React=require('react');

var News = React.createClass({
	render: function(){
		return (
    <div className="news">
            <h2 className="newsName"> </h2>
            <div className="well">
                <div className="row">
                    <div className="col-2">
                        <img className="thumbnail" src={this.props.newsData.urlsToLogos.medium}/>
                    </div>
                      <div className="col-10">
                          <h4>{this.props.newsData.name}</h4>
                          <ul className='list-group'>
                              <li className='list-group-item'>Desciption : {this.props.newsData.description}</li>
                          </ul>
                          <a className="btn btn-primary" target="_blank" href={this.props.newsData.url} > Open </a>
                      </div>
                </div>
            </div>
        </div>
);
	}
});

module.exports=News;