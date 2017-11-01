"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by S jawwad hashmi on 7/3/2017.
 */
var rxjs_1 = require("rxjs");
var auth_1 = require("./../action/auth");
var reports_1 = require("./../action/reports");
var firebaseService_1 = require("../../service/firebaseService");
var ReportsEpic = (function () {
    function ReportsEpic() {
    }
    return ReportsEpic;
}());
ReportsEpic.mainRef = firebaseService_1.FirebaseServie.mainRef;
ReportsEpic.getCrimes = function (action$) {
    return action$.ofType(auth_1.default.LOGIN_SUCCESS)
        .switchMap(function (_a) {
        var payload = _a.payload;
        // console.log('StudentEpics LOGINSUCCESS ', payload)
        if (payload && (payload.type == 'reporter' || payload.type == 'admin')) {
            ReportsEpic.mainRef.child('crimes').on('child_added', function (snapshot) {
                // console.log('child_added: ', snapshot.key, snapshot.val());
                var obj = Object.assign({}, snapshot.val());
                obj['$key'] = snapshot.key;
                reports_1.default.getCrimes(obj);
            });
        }
        return rxjs_1.Observable.of({
            type: reports_1.default.NULL
        });
    });
};
ReportsEpic.getComplaints = function (action$) {
    return action$.ofType(auth_1.default.LOGIN_SUCCESS)
        .switchMap(function (_a) {
        var payload = _a.payload;
        // console.log('StudentEpics LOGINSUCCESS ', payload)
        if (payload && (payload.type == 'reporter' || payload.type == 'admin')) {
            ReportsEpic.mainRef.child('complaints').on('child_added', function (snapshot) {
                // console.log('child_added: ', snapshot.key, snapshot.val());
                var obj = Object.assign({}, snapshot.val());
                obj['$key'] = snapshot.key;
                reports_1.default.getComplaints(obj);
            });
        }
        return rxjs_1.Observable.of({
            type: reports_1.default.NULL
        });
    });
};
ReportsEpic.getAllReports = function (action$) {
    return action$.ofType(auth_1.default.LOGIN_SUCCESS)
        .switchMap(function (_a) {
        var payload = _a.payload;
        if (payload && (payload.type == 'reporter' || payload.type == 'admin')) {
            ReportsEpic.mainRef.child('reports').on('child_added', function (snapshot) {
                // console.log('child_added: ', snapshot.key, snapshot.val());
                var obj = Object.assign({}, snapshot.val());
                obj['$key'] = snapshot.key;
                reports_1.default.getReports(obj);
            });
        }
        return rxjs_1.Observable.of({
            type: reports_1.default.NULL
        });
    });
};
exports.default = ReportsEpic;
//# sourceMappingURL=reports.js.map