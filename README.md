# Bloom Bot
A slack bot that will remind you when it's your turn in a card game.

```javascript

// Send a Post to direct message a slack user

// Post
https://bloom-bot0.herokuapp.com/bloom

// Body
body: {
  email: STRING
}

fetch('https://bloom-bot0.herokuapp.com/bloom', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		email: 'slackuseremail@email.com',
	}),
}).then(data => data.json().then(res => {
	// if user exists
	{
		"ok": true,
		"status": "Message sent."
	}

	// if user doesn't exist
	{
		"ok": false,
		"error": "users_not_found"
	}
}));

```
