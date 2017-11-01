import * as React from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import AuthActions from "../../store/action/auth";


// Components
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import LoginComponent from '../../component/login/Login';

// Styles 

const buttonStyle = { width: '100%' }
const fieldStyle = { width: '80%' }
const style = {
  container: {
    textAlign: 'center',
    marginTop: '35px'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

interface IRMemberProps extends React.Props<any> {
  login: (obj: Object) => void;
  fblogin: () => void;
  isAuthenticated: boolean;
  activeUser: any;
}



class Login extends React.Component<IRMemberProps, any> {

  


  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this)
    this.handlefbLogin = this.handlefbLogin.bind(this)
  }

  _flag2 = true;
  handleLogin(state: any) {
    this._flag2 = false;
     this.props.login(state);
    //this.props.fblogin();
  }

handlefbLogin() {
    this._flag2 = false;
    this.props.fblogin();
  }

  _flag = true;
  componentWillReceiveProps() {
    setTimeout(() => {
      if (this.props.isAuthenticated && this._flag && this.props.activeUser.type == "reporter") {
        this._flag = false;
        browserHistory.push('/user');
      } else if (this.props.isAuthenticated && this._flag && this.props.activeUser.type == "admin") {
        this._flag = false;
        browserHistory.push('/admin');
      }
      else if (!this.props.isAuthenticated && !this._flag) {
        this._flag = true;
      }
    }, 10);
  }

  render() {
    const css = `
     .Login {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  font-weight: 400;
  padding-top: 1.5rem;
}
.Login-Panel {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  width: 30%;
  min-width: 250px;
  min-height: 270px;
}
.Login-Or {
  margin-top: .5rem;
  margin-bottom: .5rem;
}
.Login-Signup {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.Login-Signup-Link {
  color: $linkBlue;
  font-size: 1.2rem;
}
.Login-Signup-Link :hover {
  color: $materialBlue;
}
.Login-Signup-Label {
  font-size: 1rem;
  font-weight: bold;
  color: #979797;
  font-weight: 400;
}
.Login-Providers {
  margin-top: 2rem;
}
        `




    return (
      <div>
        <style>
          {css}
        </style>



        <div style={{ marginLeft: '340px', marginTop: '67px', width: '50%' }}>
          <Paper >
            <LoginComponent click={this.handleLogin} click2={this.handlefbLogin}  />
          </Paper>
        </div>
        {


          !this._flag2 ? (
            <div style={style.container}>
              <RefreshIndicator
                size={50}
                left={70}
                top={0}
                status="loading"
                style={style.refresh}
              />
            </div>
          ) : ""

        }
      </div>


    )
  }

}

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state.AuthReducer['isAuthenticated'],
    activeUser: state.AuthReducer['activeUser']
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    login: (data: Object): void => dispatch(AuthActions.login(data)),
    fblogin: (): void => dispatch(AuthActions.fblogin())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)