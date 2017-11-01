"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Home_1 = require("./home/Home");
exports.Home = Home_1.default;
var Login_1 = require("./login/Login");
exports.Login = Login_1.default;
var AdminPanel_1 = require("./adminPanel/AdminPanel");
exports.AdminPanel = AdminPanel_1.default;
var Signup_1 = require("./signup/Signup");
exports.Signup = Signup_1.default;
var App_1 = require("./app/App");
exports.App = App_1.default;
var Navbar_1 = require("./Navbar/Navbar");
exports.Navbar = Navbar_1.default;
var adminDashboard_1 = require("./../container/adminDashboard/adminDashboard");
exports.AdminDashboard = adminDashboard_1.default;
exports.components = [
    App_1.default,
    Home_1.default,
    Login_1.default,
    AdminPanel_1.default,
    Signup_1.default,
    adminDashboard_1.default,
    Navbar_1.default
];
