import React from 'react';
import ReactDOM from 'react-dom';
import BbcNewsDisplay from './BbcNewsDisplay';
export default class bbc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {data : []};
}

  BbcNews(id) {

       console.log("inside data method");
       $.ajax({
       url:"https://newsapi.org/v1/articles?apiKey=f39060f94afe4e489b2b3390997ffa48&source=" + id,
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

  }
  componentDidMount() {
    this.BbcNews();
  }

  render(){
    return (
      <div>
     <BbcNewsDisplay newsData={this.state.data}/>

    </div>

    )
  }
};
