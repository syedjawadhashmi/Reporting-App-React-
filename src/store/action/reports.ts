/**
 * Created by S jawwad hashmi on 7/3/2017.
 */
import { Action, createAction } from "redux-actions";

import { store } from '../index';

export default class ReportsActions {


    static GETCRIMES: string = "GETCRIMES";
    static GETCOMPLAINTS: string = "GETCOMPLAINTS";
       static GETMISSING: string = "GETMISSING";
    static GETREPORTS: string = "GETREPORTS";
static GETUSERREPORTS: string = "GETUSERREPORTS";
static GETUSERS: string = "GETUSERS";
     static ADDMISSINGS: string = "ADDMISSINGS";
    static ADDCOMPLAINTS: string = "ADDCOMPLAINTS";

    static ADDCRIMES: string = "ADDCRIMES";

 static DELETEREPORTS: string = "DELETEREPORTS";
 static DELETE_REPORTS_EVENT: string = "DELETE_REPORTS_EVENT";
    static UPDATE_REPORTS_EVENT: string = "UPDATE_REPORTS_EVENT";
    static UPDATEREPORT: string = "UPDATEREPORT";
    static DELETECRIMES: string = "DELETECRIMES";


    static NULL: string = "NULL";

    constructor() { }

    static getCrimes(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETCRIMES,
            payload
        })
    }
 
    static getComplaints(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETCOMPLAINTS,
            payload
        })
    }

static getMissings(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETMISSING,
            payload
        })
    }
    static getUserReports(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETUSERREPORTS,
            payload
        })
    }

    static getUsers(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETUSERS,
            payload
        })
    }


    static getReports(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETREPORTS,
            payload
        })
    }

   static deleteReports(payload: Object) {
         return  {
            type: ReportsActions.DELETEREPORTS,
            payload
        }
    }


  static updateReports(payload: Object) {
        return {
            type: ReportsActions.UPDATEREPORT,
            payload
        }
    }
    static deleteReportsEvent(payload: Object) {
        store.dispatch({
            type: ReportsActions.DELETE_REPORTS_EVENT,
            payload
        })
    }
     static updateReportsEvent(payload: Object) {
        store.dispatch({
            type: ReportsActions.UPDATE_REPORTS_EVENT,
            payload
        })
    }
    
  static addCrimes(payload: Object) {
        return {
            type: ReportsActions.ADDCRIMES,
            payload
        }
    }

  static addComplaints(payload: Object) {
        store.dispatch({
            type: ReportsActions.ADDCOMPLAINTS,
            payload
        })
    }

  static addMissings(payload: Object) {
        store.dispatch({
            type: ReportsActions.ADDMISSINGS,
            payload
        })
    }




}

