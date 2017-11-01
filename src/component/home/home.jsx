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
var Card_1 = require("material-ui/Card");
var buttonStyle = { color: 'white' };
var stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png';
var originSettings = { horizontal: 'right', vertical: 'bottom' };
var avatarSize = 50;
// Tap Plugin
// note: React.Component<Properties/Props, component-state>
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super.call(this) || this;
    }
    Home.prototype.render = function () {
        var mainMenu = (<Card_1.Card>
                <Card_1.CardMedia>
                    <img style={{ height: "90vh" }} src="http://orig02.deviantart.net/cd1f/f/2014/078/a/1/r_p_d____resident_evil_by_ephebopus365-d3g9rzy.jpg"/>
                </Card_1.CardMedia>
            </Card_1.Card>);
        return (<div>
                {mainMenu}
            </div>);
    };
    return Home;
}(React.Component));
exports.default = Home;
