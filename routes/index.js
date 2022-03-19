var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, )=> {
  res.render('home', { title: 'Express' });
});
router.get('/about', (req, res, ) =>{
 res.render('about', { title: 'Express' });
});
router.get('/weather', (req, res, next)=> {
  res.render('w1', { title: 'Express' });
});
router.get('*', (req, res, next)=> {
  res.render('error' )
})

module.exports = router;
