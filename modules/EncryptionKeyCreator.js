module.exports = function(inPassword) {
    const self = this;

    // Vars
    this.builtPassword = null;

    // Routines
    this.get = function() {
        if (self.builtPassword === null) createPassword();
        return self.builtPassword;
    }

    function createPassword() {
        // Init logic
        if (inPassword.length < 32) {
            self.builtPassword = inPassword;
            for (let i = 0; i < (32 - inPassword.length); i++) {
                self.builtPassword += '0';
            }
        } else if (inPassword.length > 32) {
            self.builtPassword = inPassword.substr(0, 32);
        }    
    }

}