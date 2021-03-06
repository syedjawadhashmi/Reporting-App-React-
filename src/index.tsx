import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
import { store } from './store/index';
import { App, Login, Signup, AdminDashboard ,User,Userhome,Crime,Complaint,Missing ,AddReports} from "./container";
import { Home } from "./component";



function checkIsAdmin(nextState: any, replace: Function) {
    let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
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
            pathname: "/",
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

ReactDOM.render(

    <MuiThemeProvider>
    <Provider store={store}>


        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="login" component={Login} />
                <Route path="signup" component={Signup} />
                <Route component={User} onEnter={checkIsAdmin}>
                    {/*<IndexRoute component={userHome} />*/}
                    <Route path="user" component={Userhome}/>
                    <Route path="admin" component={AdminDashboard}/>
                    <Route path="crimes" component={Crime}/>
                    <Route path="complaints" component={Complaint}/>
                     <Route path="missing" component={Missing}/>
                    <Route path="fileReports" component={AddReports}/>
                </Route>
            </Route>
        </Router>

    </Provider>
    </MuiThemeProvider>
        ,
    document.getElementById('root')
);