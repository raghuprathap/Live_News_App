var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userName: String,
	/*password: {
				type:String,
				validPassword: function(password){
					return this.password.toLowerCase() !== password.toLowerCase();
				}
			}*/
	password: String
				
});

module.exports=mongoose.model('userSchema', userSchema);