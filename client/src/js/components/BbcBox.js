var React = require('react');
var BbcBox = React.createClass({
UpdateComments : function(t)
{
  console.log("typing..");
 this.setState({comments: t.target.value});
},

handleAddNews: function()
 {
  console.log("added clicked");
   var newsInfo=this.props.valuedata;
   console.log(newsInfo);
   $.ajax({
   url:"http://localhost:8080/news/add/",
   type: 'POST',
  //dataType: 'JSON',
   data : newsInfo,
   success: function(msg)
   {
     alert(msg);
     console.log("inside success");

   }.bind(this),
   error: function(err)
   {

     console.log(err);
   }.bind(this)
 });


 var comments=this.state.comments;
       console.log(comments);
       var newsObject = {};
       newsObject.title=this.props.valuedata.title;
       newsObject.comments = this.state.comments;
 $.ajax({
        url:"http://localhost:8080/news/update/",
        type: 'PUT',
        data: newsObject,
        success: function(message)
              {
                 console.log(newsObject.comments);
                   console.log(newsObject.title);

               }.bind(this),
              error: function(err)
              {
                console.log(err);
              }.bind(this)
            });
},


render : function()
{
return (


   <div className="movie">
           <h2 className="movieName" id="enhance"> </h2>
           <div className="well">
               <div className="row">


              <h2><b>      <a target="_blank"  href={this.props.newsData.url}>{this.props.newsData.title}</a></b></h2>
                       <img className="thumbnail" src={this.props.newsData.urlToImage}/>

                     <div className="col-sm-8">

                         <ul className='list-group'>
                             <li className='list-group-item'>publishedAt : {this.props.newsData.publishedAt}</li>
                         </ul>

                        <input className="txtdesign"  type="text" id="comments" placeholder="Enter your comments......" onChange={this.UpdateComments} />
                        <button className="btn btn-warning" className="navdesign" onClick={this.handleAddNews}>Favourite</button>
                     </div>
               </div>
           </div>
       </div>
);
}

});

module.exports=BbcBox;
