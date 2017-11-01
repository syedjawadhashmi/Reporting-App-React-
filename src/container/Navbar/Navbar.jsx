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
//import { authActions } from '../../action/auth';
var react_router_1 = require("react-router");
// redux/firebase
var react_redux_1 = require("react-redux");
var AppBar_1 = require("material-ui/AppBar");
var FlatButton_1 = require("material-ui/FlatButton");
var buttonStyle = { color: 'white' };
var stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png';
var originSettings = { horizontal: 'right', vertical: 'bottom' };
var avatarSize = 50;
var Navbar = (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        var _this = _super.call(this) || this;
        _this.handleLogOut = _this.handleLogOut.bind(_this);
        return _this;
    }
    Navbar.prototype.handleLogOut = function (state) {
        this.props.signOut();
        react_router_1.browserHistory.push('/');
    };
    Navbar.prototype.render = function () {
        var auth = this.props.auth;
        var mainMenu = (<div className='Navbar-Main-Menu'>
                <FlatButton_1.default label='Complaint Reports' style={buttonStyle} onClick={function () { return react_router_1.browserHistory.push('/'); }}/>
                <FlatButton_1.default label='Crime Reports' style={buttonStyle} onClick={function () { return react_router_1.browserHistory.push('/'); }}/>

                <FlatButton_1.default label='Sign Up' style={buttonStyle} onClick={function () { return react_router_1.browserHistory.push('/signup'); }}/>
                <FlatButton_1.default label='Login' style={buttonStyle} onClick={function () { return react_router_1.browserHistory.push('/login'); }}/>
            </div>);
        var rightMenu = false ? (<div className='Navbar-Main-Menu'>
                    

                    <FlatButton_1.default label='LogOut' style={buttonStyle} onClick={this.handleLogOut}/>
                </div>) : mainMenu;
        /* return (
         <AppBar
         title={
         <Link to='/' style={buttonStyle}>
         iq
         </Link>
         }
         className='Navbar'
         iconElementRight={mainMenu}
         />
         )*/
        return (<div>

                <AppBar_1.default title="Raccon Police Department" className='Navbar' showMenuIconButton={false} iconElementRight={rightMenu}/>

            </div>);
    };
    return Navbar;
}(React.Component));
function mapStateToProps(state) {
    return {
        //isRegistered: state.AuthReducer['isRegistered'],
        // activeUser: state.AuthReducer['activeUser'],
        // counterReg: state.AuthReducer['counterReg']
        auth: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        signup: function (data) { return dispatch(); }
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Navbar);
