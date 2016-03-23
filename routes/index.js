var express = require('express');
var User=require('../models/user');
var news=require('../models/news');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.info(req.session);
  var user;
  if(req.session.passport==undefined){
    user="";
  }else{
    user=req.session.passport.user;
  }
  console.log(user);
  res.render('index', { title: 'Express',
    User:user
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/login',passport.authenticate('local',{successRedirect:'/',
  failureRedirect:'/login'}),function(req, res) {
});


router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/register',function(req,res,next){
  User.register(new User({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      return res.redirect('/userError');
    }
    else{
      res.redirect('/login');
    }
  });
});

router.get('/news',function(req,res,next){
  res.render('news',{title: 'Express'});
});

router.get('/data',function(req,res,next){
  res.render('data',{title: 'Express'});
});

router.get('/snow',function(req,res,next){
  res.render('snow',{title: 'Express'});
});

router.get('/picture',function(req,res,next){
  res.render('picture',{title: 'Express'});
});

router.get('/about-ours',function(req,res,next){
  res.render('about-ours',{title: 'Express'});
});

router.get('/member',function(req,res,next){
  res.render('member',{title: 'Express'});
});

router.get('/data-from',function(req,res,next){
  res.render('data-from',{title: 'Express'});
});

router.get('/items',function(req,res,next){
  res.render('items',{title: 'Express'});
});

router.get('/ours',function(req,res,next){
  res.render('ours',{title: 'Express'});
});
router.get('/data-list',function(req,res,next){
  res.render('data-list',{title: 'Express'});
});
router.get('/data-download',function(req,res,next){
  res.render('data-download',{title: 'Express'});
});

router.get('/yard',function(req,res,next){
  res.render('yard',{title: 'Express'});
});

router.get('/lab',function(req,res,next){
  res.render('lab',{title: 'Express'});
});
router.get('/feature',function(req,res,next){
  news.find({title:req.query.title},function(err,data){
    res.render('feature',{title: 'Express',
      data:data
    });
  });
});
router.get('/userError',function(req,res,next){
  res.render('userError',{title: 'Express'});
});
module.exports = router;
