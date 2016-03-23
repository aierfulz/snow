/**
 * Created by Administrator on 2016/3/13.
 */
var mongoose = require('./db');
     passportLocalMongoose = require('passport-local-mongoose');


var UserSchema=mongoose.Schema({
    username:String,
    password:String,
    email:String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

