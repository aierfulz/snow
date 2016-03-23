/**
 * Created by Administrator on 2016/3/14.
 */
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/snow');

module.exports=mongoose;