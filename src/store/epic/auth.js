"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var auth_1 = require("./../action/auth");
// import { HttpService } from "./../../service/index"
var firebaseService_1 = require("../../service/firebaseService");
var firebase = require("firebase");
var AuthEpic = (function () {
    function AuthEpic() {
    }
    AuthEpic.prototype.setLocalStorage = function (userObj) {
        localStorage.setItem('react-localStorage-user', JSON.stringify(userObj));
    };
    AuthEpic.prototype.clearLocalStorage = function () {
        localStorage.removeItem('react-localStorage-user');
    };
    AuthEpic.prototype.getLocalStorage = function () {
        return JSON.parse(localStorage.getItem('react-localStorage-user'));
    };
    return AuthEpic;
}());
AuthEpic.mainRef = firebaseService_1.FirebaseServie.mainRef;
AuthEpic.signupEpic = function (action$) {
    return action$.ofType(auth_1.default.SIGNUP)
        .switchMap(function (_a) {
        var payload = _a.payload;
        return rxjs_1.Observable.fromPromise(AuthEpic.mainRef.child("users/" + payload.cuid).once('value'))
            .map(function (snapshot) {
            if (snapshot.val()) {
                // console.log('User does exist');
                return {
                    type: auth_1.default.SIGNUP_FAILER,
                    payload: { isError: { status: true, msg: 'user id exists' } }
                };
            }
            else {
                // console.log('User does not exist');
                return {
                    type: auth_1.default.CREATEUSER,
                    payload: payload
                };
            }
        });
    });
};
AuthEpic.createrMemberEpic = function (action$) {
    return action$.ofType(auth_1.default.CREATEUSER)
        .switchMap(function (_a) {
        var payload = _a.payload;
        return rxjs_1.Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(payload.eml, payload.pwd))
            .catch(function (err) {
            return rxjs_1.Observable.of({
                type: auth_1.default.SIGNUP_FAILER,
                payload: { isError: { status: true, msg: err.message } }
            });
        })
            .map(function (obj) {
            if (obj.type === 'SIGNUP_FAILER') {
                return obj;
            }
            obj.updateProfile({
                displayName: payload.cuid,
                photoURL: 'some/url'
            });
            console.log("obj" + obj);
            var uObj = {
                fuid: obj.uid,
                cuid: payload.cuid,
                eml: payload.eml,
                type: "reporter",
                pwd: payload.pwd,
                fname: payload.fname,
                lname: payload.lname
            };
            firebase.database().ref('/').child("users/" + payload.cuid).set(uObj);
            firebase.database().ref('/').child("auth/" + obj.uid).set(uObj);
            console.log("obj" + obj);
            console.log('ok created user wow!' + obj);
            return {
                type: auth_1.default.SIGNUP_SUCCESS,
                payload: uObj
            };
        });
    });
};
AuthEpic.isLoggedInEpic = function (action$) {
    return action$.ofType(auth_1.default.ISLOGGEDIN)
        .switchMap(function () {
        var payload = JSON.parse(localStorage.getItem('react-localStorage-user'));
        if (payload && payload.type) {
            return rxjs_1.Observable.of({
                type: auth_1.default.LOGIN_SUCCESS,
                payload: payload
            });
        }
        else {
            return rxjs_1.Observable.of({
                type: auth_1.default.NULL
            });
        }
    });
};
AuthEpic.loginEpic = function (action$) {
    return action$.ofType(auth_1.default.LOGIN)
        .switchMap(function (_a) {
        var payload = _a.payload;
        // console.log('LOGIN--- ', payload)
        return rxjs_1.Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password))
            .catch(function (err) {
            console.log('err ', err);
            return rxjs_1.Observable.of(err);
        })
            .switchMap(function (d) {
            // console.log('d login ecpis', d)
            console.log("login" + JSON.stringify(d));
            if (d.message) {
                // error
                return rxjs_1.Observable.of({
                    type: auth_1.default.LOGIN_FAILER,
                    payload: d.message
                });
            }
            else {
                return rxjs_1.Observable.fromPromise(firebase.database().ref('/').child("users/" + d.displayName).once('value'))
                    .map(function (u) {
                    //set local storage
                    console.log("dsfsdfsd" + JSON.stringify(u.val()));
                    localStorage.setItem('react-localStorage-user', JSON.stringify(u.val()));
                    return {
                        type: auth_1.default.LOGIN_SUCCESS,
                        payload: u.val()
                    };
                });
            }
        });
    });
};
AuthEpic.LogoutEpic = function (action$) {
    return action$.ofType(auth_1.default.LOGOUT)
        .switchMap(function () {
        localStorage.removeItem('react-localStorage-user');
        return rxjs_1.Observable.fromPromise(firebase.auth().signOut())
            .map(function () {
            return {
                type: auth_1.default.LOGOUT_SUCCESS
            };
        })
            .catch(function (err) {
            return rxjs_1.Observable.of({
                type: auth_1.default.LOGOUT_SUCCESS
            });
        });
    });
};
exports.default = AuthEpic;
//# sourceMappingURL=auth.js.map