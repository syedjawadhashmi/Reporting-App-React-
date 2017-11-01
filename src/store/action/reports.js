"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var ReportsActions = (function () {
    function ReportsActions() {
    }
    ReportsActions.getCrimes = function (payload) {
        index_1.store.dispatch({
            type: ReportsActions.GETCRIMES,
            payload: payload
        });
    };
    ReportsActions.getComplaints = function (payload) {
        index_1.store.dispatch({
            type: ReportsActions.GETCOMPLAINTS,
            payload: payload
        });
    };
    ReportsActions.getReports = function (payload) {
        index_1.store.dispatch({
            type: ReportsActions.GETREPORTS,
            payload: payload
        });
    };
    return ReportsActions;
}());
ReportsActions.GETCRIMES = "GETCRIMES";
ReportsActions.GETCOMPLAINTS = "GETCOMPLAINTS";
ReportsActions.GETREPORTS = "GETREPORTS";
ReportsActions.NULL = "NULL";
exports.default = ReportsActions;
//# sourceMappingURL=reports.js.map