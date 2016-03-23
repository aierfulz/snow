/**
 * Created by Administrator on 2016/3/20.
 */
var mongoose = require('./db');

var newsSchema = mongoose.Schema({
    title:String,
    page_one:String,
    img_path_one:String,
    page_two:String,
    img_path_two:String,
    page_three:String
});
module.exports=mongoose.model('newsModel',newsSchema);




