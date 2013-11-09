
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.session.lastPage);
	if(req.session.lastPage == '/authorize')
  		res.redirect('/authorize');
  	else
  		res.render('index', { title: 'AirVantage Node.JS Example' });
};