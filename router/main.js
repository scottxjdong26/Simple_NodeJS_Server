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

	/**
 	 * When the user makes a request to the POST endpoint, 
 	 * it should increment the counter & return the counter after increment like:
     * {"date":<timestamp>,"counter":<counter>}.
 	 */
	app.post('/addCounter', function(req, res, next) {		
		// access the global counter and increment by 1
		req.app.locals.counter++;
		// return the updated counter as a JSON object along with the current date
		var counter = req.app.locals.counter;
		res.json({ date: Date.now(), counter: counter});
	});
	
}
