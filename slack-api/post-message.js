const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

module.exports = async (id, real_name) => {
    return await fetch(process.env.SLACK_POST_MESSAGE, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.BOT_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            channel: id,
            text: `Hey ${real_name}! It's your turn to play in your Bloom game!`,
        })
    });
}
