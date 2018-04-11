const crypto = require('crypto');

module.exports = function(password) {
    const self = this;

    this.algorithm = 'aes-256-ctr';

    this.IV = crypto.randomBytes(16);

    this.encrypt = function(text){
        var cipher = crypto.createCipheriv(self.algorithm,password, self.IV)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return {
            crypted: crypted,
            IV: self.IV
        };
    }
    
    this.decrypt = function(text, customIV){

        let useIV = self.IV;
        if (customIV != undefined) {
            useIV = customIV;
        }

        var decipher = crypto.createCipheriv(self.algorithm,password, useIV)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }

}