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
var TextField_1 = require("material-ui/TextField");
var RaisedButton_1 = require("material-ui/RaisedButton");
var fieldStyle = { width: '80%', marginLeft: '60px'
};
var buttonStyle = { width: '100%', marginTop: '30px' };
var SignupComponent = (function (_super) {
    __extends(SignupComponent, _super);
    function SignupComponent() {
        var _this = _super.call(this) || this;
        _this.state = {
            cuid: "",
            fname: "",
            lname: "",
            type: "student",
            eml: "",
            contact: "",
            // address: "",
            pwd: ""
        };
        _this._onSubmit = _this._onSubmit.bind(_this);
        _this.handlerInput = _this.handlerInput.bind(_this);
        setTimeout(function () {
            console.log('this.props.authenticUser ', _this.props.authenticUser);
        }, 5000);
        return _this;
    }
    SignupComponent.prototype.handlerInput = function (e) {
        this.setState((_a = {},
            _a[e.target.name] = e.target.value,
            _a));
        var _a;
    };
    SignupComponent.prototype._onSubmit = function (e) {
        e.preventDefault();
        console.log(this.state, this.state.cuid.length);
        if (this.state.cuid.length <= 4) {
            alert('Pls User Id, max length 4');
        }
        else if (this.state.fname.length <= 3) {
            alert('Pls First Name');
        }
        else if (this.state.lname.length <= 3) {
            alert('Pls Last Name');
        }
        else if (this.state.eml.length <= 5) {
            alert('Pls Email Id');
        }
        else if (this.state.contact.length <= 7) {
            alert('Pls Contact, mix length 7');
        }
        else if (this.state.pwd.length <= 5) {
            alert('Pls Pwd, max length should be 5');
        }
        else {
            this.props.click(this.state);
        }
    };
    SignupComponent.prototype.render = function () {
        return (<form style={{ padding: '16px', margin: '0px' }} className='LoginForm' onSubmit={this._onSubmit}>

                <TextField_1.default hintText='First Name' floatingLabelText='First Name' onChange={this.handlerInput} style={fieldStyle}/>
                <TextField_1.default hintText='Last Name' floatingLabelText='Last Name' onChange={this.handlerInput} style={fieldStyle}/>

                <TextField_1.default hintText='Email' floatingLabelText='Email' onChange={this.handlerInput} style={fieldStyle}/>
                <TextField_1.default hintText='password' floatingLabelText='Password' onChange={this.handlerInput} style={fieldStyle} type='password'/>
                

                <div className='LoginForm-Submit'>
                    <RaisedButton_1.default label='Sign Up' primary type='submit' style={buttonStyle}/>
                </div>
            </form>);
    };
    return SignupComponent;
}(React.Component));
exports.default = SignupComponent;
