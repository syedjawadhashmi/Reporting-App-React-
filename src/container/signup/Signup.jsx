"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
//import { authActions } from '../../action/auth';
// Components
var Signup_1 = require("../../component/signup/Signup");
var Paper_1 = require("material-ui/Paper");
var Signup = (function (_super) {
    __extends(Signup, _super);
    function Signup() {
        var _this = _super.call(this) || this;
        _this.handleSignup = _this.handleSignup.bind(_this);
        return _this;
    }
    Signup.prototype.handleSignup = function (state) {
        // this.props.registerWithCustom({ email, password, firstName ,lastName})
        react_router_1.browserHistory.push('/signin');
    };
    Signup.prototype.render = function () {
        return (<div className='Login' style={{ marginLeft: '340px', marginTop: '67px', width: '50%' }}>
                <Paper_1.default className='Login-Panel'>
                    <Signup_1.default click={this.handleSignup}/>
                </Paper_1.default>
            </div>);
    };
    return Signup;
}(React.Component));
function mapDispatchToProps(dispatch) {
    return {
        handleSignup: function (data) { return dispatch(); }
    };
}
exports.default = react_redux_1.connect(null, mapDispatchToProps)(Signup);
