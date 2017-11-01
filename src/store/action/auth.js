"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthActions = (function () {
    function AuthActions() {
    }
    AuthActions.isLoggedin = function () {
        return {
            type: AuthActions.ISLOGGEDIN
        };
    };
    AuthActions.signup = function (payload) {
        return {
            type: AuthActions.SIGNUP,
            payload: payload
        };
    };
    AuthActions.login = function (payload) {
        return {
            type: AuthActions.LOGIN,
            payload: payload
        };
    };
    AuthActions.logout = function () {
        return {
            type: AuthActions.LOGOUT
        };
    };
    return AuthActions;
}());
AuthActions.SIGNUP = "SIGNUP";
AuthActions.SIGNUP_FAILER = "SIGNUP_FAILER";
AuthActions.CREATEUSER = "CREATEUSER";
AuthActions.SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
AuthActions.LOGIN = "LOGIN";
AuthActions.LOGIN_SUCCESS = "LOGIN_SUCCESS";
AuthActions.LOGIN_FAILER = "LOGIN_FAILER";
AuthActions.LOGOUT = "LOGOUT";
AuthActions.LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
AuthActions.ISLOGGEDIN = "ISLOGGEDIN";
AuthActions.NULL = "NULL";
exports.default = AuthActions;
//# sourceMappingURL=auth.js.map