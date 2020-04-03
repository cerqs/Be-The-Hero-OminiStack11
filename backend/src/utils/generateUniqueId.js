const crypto = require ('crypto');

module.exports = function gemerateUnitqueId(){
    return crypto.randomBytes(4).toString('HEX');
}