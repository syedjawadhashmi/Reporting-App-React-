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
var Navbar = (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super.call(this) || this;
    }
    Navbar.prototype.componentDidMount = function () {
        // console.log('componentDidMount() ', this.props.isAuthenticated)
    };
    Navbar.prototype.componentWillReceiveProps = function () { };
    // <li className="nav-item" onClick={this.props.logout}><Link className="nav-link" to="/logout"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
    // _flag = true;
    // ifLoggedIn() {
    //     console.log('ifLoggedIn')
    //     if (this.props.isAuthenticated && this._flag) {
    //         this._flag = false;
    //         return (
    //             <div>
    //                 <ul className="nav navbar-nav float-xs-right">
    //                     <li className="nav-item" onClick={this.props.logout}> Logout</li>
    //                 </ul>
    //             </div>
    //         )
    //     } else if(this.props.isAuthenticated && !this._flag) {
    //         this._flag = true;
    //         return (
    //             <div>
    //                 <ul className="nav navbar-nav float-xs-right">
    //                     <li className="nav-item"><Link className="nav-link" to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
    //                     <li className="nav-item"><Link className="nav-link" to="/a"><span className="glyphicon glyphicon-user"></span> Admin</Link></li>
    //                     <li className="nav-item"><Link className="nav-link" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    //                 </ul>
    //             </div>
    //         )
    //     }
    // }
    Navbar.prototype.render = function () {
        return (<nav className="navbar navbar-fixed-top navbar-light bg-faded" style={{ backgroundColor: '#e3f2fd' }}>
                <react_router_1.Link className="navbar-brand" to="/home">CRS</react_router_1.Link>
                <ul className="nav navbar-nav">
                    {this.props.isAuthenticated &&
            <li className="nav-item">
                            <react_router_1.Link className="nav-link" to="/signup">Register Member</react_router_1.Link>
                        </li>}
                </ul>
                {this.props.isAuthenticated &&
            <ul className="nav navbar-nav float-xs-right">
                        <li className="nav-item" onClick={this.props.logout}> Logout</li>
                    </ul>}
                {!this.props.isAuthenticated &&
            <ul className="nav navbar-nav float-xs-right">
                        <li className="nav-item"><react_router_1.Link className="nav-link" to="/signup"><span className="glyphicon glyphicon-user"></span> Sign-up</react_router_1.Link></li>
                        <li className="nav-item"><react_router_1.Link className="nav-link" to="/login"><span className="glyphicon glyphicon-log-in"></span> Sign-in</react_router_1.Link></li>
                    </ul>}
            </nav>);
    };
    return Navbar;
}(React.Component));
exports.default = Navbar;
