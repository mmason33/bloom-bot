const fetch = require('node-fetch');
const dotenv = require('dotenv').config();
const emailLookup = require('./slack-api/email-lookup');
const postMessage = require('./slack-api/post-message');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

// Dummy response for server health check
app.get('/', (req, res) => {
	res.render('./public/index.html')
});

// Post route for the slack api promises
app.post('/bloom', (req, res) => {
	if (!req.body.email) return false;
	emailLookup(req.body.email).then(email_data => {
		email_data.json().then(email_res => {
			if (email_res.ok === false) {
				res.json(email_res);
				return false;
			}
			postMessage(email_res.user.id, email_res.user.real_name).then(message_data => {
				message_data.json().then(message_res => {
					console.log(message_res);
					res.json({
						ok: true,
						status: 'message_sent'
					});
				});
			});
		});
	});
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
