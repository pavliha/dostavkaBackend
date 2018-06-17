'use strict'

class LoginUser {
    // noinspection JSUnusedGlobalSymbols
    get rules() {
        return {
            email: 'required|email',
            password: 'required'
        }
    }

    // noinspection JSUnusedGlobalSymbols
    get validateAll() {
        return true
    }

}

module.exports = LoginUser