module.exports = function(app)
{	
	app.get('/', function(req, res, next) {
		res.render('index.html')
	});
	
	/**
	 * When the user makes a request to /getCounter,
	 * it should return the counter as a JSON object along with the current date, ie:
     * {"date":<timestamp>,"counter":<counter>}.
	 */
	app.get('/getCounter', function(req, res, next) {
		// get the value of the global counter
		var counter = req.app.locals.counter;
		// return the counter as a JSON object along with the current date
		res.json({ date: Date.now(), counter: counter});
	});

	
}
