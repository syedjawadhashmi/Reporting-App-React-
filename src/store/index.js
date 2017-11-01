// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_observable_1 = require("redux-observable");
var redux_2 = require("redux");
var redux_observable_2 = require("redux-observable");
// reducers
var auth_1 = require("./reducer/auth");
var student_1 = require("./reducer/student");
var reports_1 = require("./reducer/reports");
// epics
var auth_2 = require("./epic/auth");
var student_2 = require("./epic/student");
var reports_2 = require("./epic/reports");
// Application Epics / Effects
exports.rootEpic = redux_observable_2.combineEpics(auth_2.default.signupEpic, auth_2.default.createrMemberEpic, auth_2.default.loginEpic, auth_2.default.isLoggedInEpic, auth_2.default.LogoutEpic, student_2.default.getVacancies, student_2.default.getCompanies, student_2.default.applyVacantEpic, student_2.default.onVacancyEventChangesEpics, student_2.default.addVacancyEpics, student_2.default.updateVacancyEpics, student_2.default.deleteVacancyEpics, student_2.default.onVacancyEventDeleteEpics, reports_2.default.getAllReports, reports_2.default.getComplaints, reports_2.default.getCrimes);
// Application Reducers
exports.rootReducer = redux_2.combineReducers({
    AuthReducer: auth_1.default,
    StudentReducer: student_1.default,
    ReportsReducer: reports_1.default
});
// for initialize in application 
var epicMiddleware = redux_observable_1.createEpicMiddleware(exports.rootEpic);
var createStoreWithMiddleware = redux_1.applyMiddleware(epicMiddleware)(redux_1.createStore);
exports.store = createStoreWithMiddleware(exports.rootReducer);
//# sourceMappingURL=index.js.map