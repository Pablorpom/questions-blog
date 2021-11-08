const { v4: uuidv4 } = require('uuid');

const getRandomId = ()=> uuidv4();

module.exports = getRandomId;