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
var FlatButton_1 = require("material-ui/FlatButton");
var Login_1 = require("../../component/login/Login");
var auth_1 = require("./../../store/action/auth");
function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer['isAuthenticated'],
    };
}
function mapDispatchToProps(dispatch) {
    return {
        login: function (data) { return dispatch(auth_1.default.login(data)); }
    };
}
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this._flag = true;
        _this.onLoginClick = _this.onLoginClick.bind(_this);
        return _this;
    }
    Login.prototype.onLoginClick = function (state) {
        this.props.login(state);
    };
    Login.prototype.componentWillReceiveProps = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.props.isAuthenticated && _this._flag) {
                _this._flag = false;
                react_router_1.browserHistory.push('/home');
            }
            else if (!_this.props.isAuthenticated && !_this._flag) {
                _this._flag = true;
            }
        }, 10);
    };
    Login.prototype.render = function () {
        return (<div className="container">
                <div className="row col-md-5 offset-md-3">
                    <Login_1.default click={this.onLoginClick}/>
                    <br />
                    <div>
                        <label>
                            Admin: admin@admin.com -- Pwd: !admin@123
                            <FlatButton_1.default label='Missing Reports'/>
                    </label>
                        <label>
                            Student: student@level0.com -- Pwd: 123456
                    </label>
                        <label>
                            Admin: company1@level0.com -- Pwd: 123456
                    </label>
                    </div>
                </div>
            </div>);
    };
    return Login;
}(React.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login);
