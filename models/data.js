/**
 * Created by Administrator on 2016/3/14.
 */
var mongoose = require('./db');

var dataSchema = mongoose.Schema({
    name:String,
    abstract:String,
    citeType:String,
    citeDeclare:String,
    themeTag:String,
    subjectTag:String,
    dataTag:String,
    placeTag:String,
    dataFormat:String,
    dataByte:String,
    dataAuthor:String,
    authorEmail:String,
    lonUp:String,
    lonDown:String,
    latLeft:String,
    latRigth:String,
    dataPath:String,
    metaPath:String,
    dataName:String,
    metaName:String

});
module.exports=mongoose.model('dataModel',dataSchema);
//var dataModel=mongoose.model('dataModel',dataSchema);
//
//var data=new dataModel({
//    name:"20071207A区雪属性",
//    abstract:"",
//    citeType:"",
//    citeDeclare:"",
//    themeTag:"",
//    subjectTag:"",
//    dataTag:"",
//    placeTag:"",
//    dataFormat:"",
//    dataByte:"",
//    dataAuthor:"",
//    authorEmail:"",
//    lonUp:"",
//    lonDown:"",
//    latLeft:"",
//    latRight:"",
//    dataPath:"E:/snow_download/data/20071207A区雪属性调查实录.xls",
//    metaPath:"E:/snow_download/meta/积雪简易测量记录表（20130106a）.doc",
//    dataName:"20071207A区雪属性调查实录.xls",
//    metaName:"积雪简易测量记录表（20130106a）.doc"
//});
//data.save(function(){
//    console.log("###############");
//});
//dataModel.find({name:"20071207A区雪属性调查实录"},function(err,data){
//    console.log(data);
//});