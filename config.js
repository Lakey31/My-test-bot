const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imghippo.com/files/pm4fo1725220281.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am Nimeshbot I am alive now!",
};
