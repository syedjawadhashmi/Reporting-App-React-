"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./../action/auth");
var INITIAL_STATE = {
    activeUser: {},
    isError: { status: false, msg: '' },
    isProcessing: false,
    isAuthenticated: false,
    isRegistered: false,
    members: [],
    counterReg: 0
};
function AuthReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case auth_1.default.SIGNUP:
            return Object.assign({}, state, { isProcessing: true });
        case auth_1.default.SIGNUP_SUCCESS:
            return Object.assign({}, state, { isProcessing: false, isRegistered: true, counterReg: state.counterReg + 1 });
        case auth_1.default.SIGNUP_FAILER:
            console.log('SIGNUP_FAILER .....', Object.assign({}, state, { isProcessing: false, isError: action.payload }));
            return Object.assign({}, state, { isProcessing: false, isError: action.payload });
        case auth_1.default.LOGIN:
            return Object.assign({}, state, { isProcessing: true });
        case auth_1.default.LOGIN_SUCCESS:
            // console.log('LOGIN_SUCCESS ', Object.assign({}, state, { isProcessing: false, isAuthenticated: true, activeUser: action.payload }))
            return Object.assign({}, state, { isProcessing: false, isAuthenticated: true, activeUser: action.payload });
        case auth_1.default.LOGIN_FAILER:
            return Object.assign({}, state, { isProcessing: false, isAuthenticated: false, activeUser: {}, isError: { status: true, msg: action.payload } });
        case auth_1.default.LOGOUT:
            return Object.assign({}, state, { isProcessing: true });
        case auth_1.default.LOGOUT_SUCCESS:
            return Object.assign({}, state, { isProcessing: false, isAuthenticated: false, activeUser: {}, counterReg: 0, isError: { status: false, msg: null } });
        default:
            return state;
    }
}
exports.default = AuthReducer;
//# sourceMappingURL=auth.js.map