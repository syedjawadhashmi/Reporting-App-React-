"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reports_1 = require("./../action/reports");
var INITIAL_STATE = {
    isError: { status: false, msg: '' },
    isProcessing: false,
    crimes: {},
    complaints: {},
    reports: {}
};
function ReportsReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    var newObj = null;
    switch (action.type) {
        case reports_1.default.GETCOMPLAINTS:
            newObj = Object.assign({}, state.complaints);
            newObj[action.payload['$key']] = action.payload;
            console.log('Complaints---------------------------', Object.assign({}, state, { complaints: newObj }));
            return Object.assign({}, state, { complaints: newObj });
        case reports_1.default.GETCRIMES:
            newObj = Object.assign({}, state.crimes);
            newObj[action.payload['$key']] = action.payload;
            console.log('Crimes---------------------------', Object.assign({}, state, { crimes: newObj }));
            return Object.assign({}, state, { crimes: newObj });
        case reports_1.default.GETREPORTS:
            console.log('ALL REPORTS-----', action.payload);
            newObj = Object.assign({}, state.reports);
            newObj[action.payload['$key']] = action.payload;
            return Object.assign({}, state, { reports: newObj });
        default:
            return state;
    }
}
exports.default = ReportsReducer;
//# sourceMappingURL=reports.js.map