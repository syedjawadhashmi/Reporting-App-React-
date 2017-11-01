// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';


// Application State IAppState
import IAppState from '../../src/model/IAppState'

// reducers
import AuthReducer from "./reducer/auth";
import ReportsReducer from "./reducer/reports";

// epics
import AuthEpic from "./epic/auth";
import ReportsEpic from "./epic/reports";


// Application Epics / Effects
export const rootEpic = combineEpics(
        AuthEpic.signupEpic,
        AuthEpic.createrMemberEpic,
        AuthEpic.loginEpic,
        AuthEpic.isLoggedInEpic,
        AuthEpic.LogoutEpic,
        AuthEpic.signInWithFacebook,
        ReportsEpic.getAllReports,
        ReportsEpic.onReportsEventDeleteEpics,
        ReportsEpic.getComplaints,
        ReportsEpic.getCrimes,
        ReportsEpic.getMissings,
        ReportsEpic.getUserReports,
        ReportsEpic.getUsers,
        ReportsEpic.addReports,
        ReportsEpic.deleteReport,
        ReportsEpic.updateReport,
        ReportsEpic.onReportsEventUpdateEpics

);

// Application Reducers
export const rootReducer = combineReducers<IAppState>({
    AuthReducer,
    ReportsReducer
});




// for initialize in application 


const epicMiddleware = createEpicMiddleware(rootEpic);
//const loggerMiddleware = (createLogger as any)();
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);