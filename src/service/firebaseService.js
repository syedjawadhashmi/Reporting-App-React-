"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("firebase");
var index_1 = require("./../config/index");
firebase.initializeApp(index_1.default.firebaseDev);
var FirebaseServie = (function () {
    function FirebaseServie() {
    }
    FirebaseServie.saveImageToFirebase = function (location, filename, file) {
        console.log(FirebaseServie.storage);
        return new Promise(function (resolve, reject) {
            var uploadRef = FirebaseServie.storage.child(location).child(filename).put(file);
            uploadRef.on('state_changed', null, function (err) {
                reject(err);
            }, function () {
                resolve(uploadRef.snapshot.downloadURL);
            });
        });
    };
    return FirebaseServie;
}());
FirebaseServie.mainRef = firebase.database().ref();
FirebaseServie.storage = firebase.storage().ref();
FirebaseServie.auth = firebase.auth;
exports.FirebaseServie = FirebaseServie;
//# sourceMappingURL=firebaseService.js.map