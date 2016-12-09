var isLoggedIn = function(req, res, next) {
  if(req.isAuthenticated()){
  return next();}
  else {
    res.json('not authenticated');
  }
};

module.exports=isLoggedIn;