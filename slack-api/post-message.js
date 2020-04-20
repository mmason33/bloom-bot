const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

/**
 * @function module.exports - Send a direct message to a user
 * @param {string} id - The user id needed to send a direct message
 * @param {string} real_name - The name of the user
 * @returns {Promise}
 */
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
