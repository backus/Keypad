express = require 'express'
app = express()

app.use express.bodyParser()

#PLAIN TEXT PASSWORD = SECURITY
password = '1234'

app.get '/', (req,res)->
	res.sendfile 'index.html'

app.post '/unlock', (req,res)->
	submittedKey = req.body.key
	if submittedKey == password
		res.send 'correct'
	else
		res.send 'incorrect'


app.get '/:resource(css|js|img)/:file', (req,res)->
	res.sendfile req.params.resource + '/' + req.params.file

app.listen process.env.PORT || 8080 #for heroku