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
var react_router_1 = require("react-router");
var Card_1 = require("material-ui/Card");
var Navbar_1 = require("./../../container/Navbar/Navbar");
// redux/firebase
var react_redux_1 = require("react-redux");
var auth_1 = require("./../../store/action/auth");
var buttonStyle = { color: 'white' };
var stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png';
var originSettings = { horizontal: 'right', vertical: 'bottom' };
var avatarSize = 50;
// Tap Plugin
// for isLoggedin Property from REDUX
function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer['isAuthenticated'],
    };
}
// for call isLoggedin
function mapDispatchToProps(dispatch) {
    return {
        isLoggedin: function () { return dispatch(auth_1.default.isLoggedin()); },
        logout: function () { return dispatch(auth_1.default.logout()); }
    };
}
// note: React.Component<Properties/Props, component-state>
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this._flag = true;
        setTimeout(function () {
            _this.props.isLoggedin();
        }, 5);
        _this.logoutFunc = _this.logoutFunc.bind(_this);
        return _this;
    }
    App.prototype.componentWillReceiveProps = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.props.isAuthenticated && _this._flag && _this.props.location.pathname != "/signup") {
                _this._flag = false;
                react_router_1.browserHistory.push('/login');
            }
            else if (_this.props.isAuthenticated && !_this._flag) {
                _this._flag = true;
            }
        }, 5);
    };
    App.prototype.logoutFunc = function () {
        this.props.logout();
    };
    App.prototype.render = function () {
        var mainMenu = (<Card_1.Card>
                <Card_1.CardMedia>
                    <img style={{ height: "90vh" }} src="http://orig02.deviantart.net/cd1f/f/2014/078/a/1/r_p_d____resident_evil_by_ephebopus365-d3g9rzy.jpg"/>
                </Card_1.CardMedia>
            </Card_1.Card>);
        return (<div>

                <Navbar_1.default />

                {mainMenu}
            </div>);
    };
    return App;
}(React.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
