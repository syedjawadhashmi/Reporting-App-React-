"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Login_1 = require("./login/Login");
exports.LoginComponent = Login_1.default;
var Signup_1 = require("./signup/Signup");
exports.SignupComponent = Signup_1.default;
var home_1 = require("./home/home");
exports.Home = home_1.default;
var Navbar_1 = require("./navbar/Navbar");
exports.Navbar = Navbar_1.default;
exports.components = [
    Login_1.default,
    Signup_1.default,
    Navbar_1.default,
    home_1.default
];
