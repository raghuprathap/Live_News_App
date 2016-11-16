var express = require('express');
var router = express.Router();
 var User = require('../model/user');

router.route("/add")
.post(function(req, res) {
  if(req.body)
  {
    var userVar = new User();
    userVar.username=req.body.username;
    userVar.password=req.body.password;
    userVar.save(function(err){
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send("User inserted");
    }
    });
  }
})





module.exports = router;
