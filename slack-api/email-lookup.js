const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

/**
 * @function module.exports - Lookup user info via email
 * @param {string} user_email - The email of the user
 * @returns {Promise}
 */
module.exports = async (user_email) => {
    const url = await createUrlEncoded(user_email);
    return await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.BOT_TOKEN}`
        }
    });
}

/**
 * @function createUrlEncoded - Create url object and add query params
 * @param {string} email - User's email
 * @returns {Promise}
 */
function createUrlEncoded(email) {
    return new Promise((resolve, reject) => {
        const url = new URL(process.env.SLACK_EMAIL_LOOKUP);
        if (!url) reject('No url passed.');
        const params = {
            email
        };

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        resolve(url);
    });
}
