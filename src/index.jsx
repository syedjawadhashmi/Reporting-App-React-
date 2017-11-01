"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var react_redux_1 = require("react-redux");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var injectTapEventPlugin = require("react-tap-event-plugin");
// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
var index_1 = require("./store/index");
// import * as firebase from "firebase";
var container_1 = require("./container");
function checkIsAdmin(nextState, replace) {
    var user = JSON.parse(localStorage.getItem("react-localStorage-user"));
    // console.log('user in localStorage ', user )
    // if (user && (user.type === 'admin' || user.type === 'company' || user.type === 'student')) {
    //     console.log('authenricated royte by admin')
    //     // replace({
    //     //     pathname: "/a/home",
    //     //     state: { nextPathname: nextState.location.pathname }
    //     // })
    // } else 
    if (!user) {
        replace({
            pathname: "/login",
            state: { nextPathname: nextState.location.pathname }
        });
    }
}
ReactDOM.render(<MuiThemeProvider_1.default>
    <react_redux_1.Provider store={index_1.store}>


        <react_router_1.Router history={react_router_1.browserHistory}>
            <react_router_1.Route path="/" component={container_1.App}>
                <react_router_1.IndexRoute component={container_1.App}/>
                <react_router_1.Route path="login" component={container_1.Login}/>
                <react_router_1.Route path="signup" component={container_1.Signup}/>
                <react_router_1.Route component={container_1.AdminDashboard} onEnter={checkIsAdmin}>
                    <react_router_1.IndexRoute component={container_1.Home}/>
                    <react_router_1.Route path="home" component={container_1.Home}/>
                    
                </react_router_1.Route>
            </react_router_1.Route>
        </react_router_1.Router>

    </react_redux_1.Provider>
    </MuiThemeProvider_1.default>, document.getElementById('root'));
