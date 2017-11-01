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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Card_1 = require("material-ui/Card");
var react_redux_1 = require("react-redux");
;
var Crime = (function (_super) {
    __extends(Crime, _super);
    function Crime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crime.prototype.showList1 = function (obj) {
        return (obj) ? Object.keys(obj) : [];
    };
    Crime.prototype.showList2 = function (users) {
        if (!users) {
            return [];
        }
        console.log(users);
        return Object.keys(users).reduce(function (list, uid) {
            return list.concat([
                __assign({ uid: uid }, users[uid])
            ]);
        }, []);
    };
    Crime.prototype.render = function () {
        var _this = this;
        return (<div>

                <Card_1.Card style={{ margin: '20px' }}>
                    <Card_1.CardHeader title="View Reports" style={{ marginLeft: '20px' }}/>


                    {this.showList1(this.props.crimes).map(function (val, indx) {
            return <Card_1.Card key={indx} style={{ margin: '30px', marginBottom: '10px' }}>

                                <Card_1.CardHeader title={_this.props.crimes[val].reporterName} subtitle={_this.props.crimes[val].role} avatar={_this.props.crimes[val].url2}/>
                                <Card_1.CardText>

                                    {_this.props.crimes[val].details}
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                                </Card_1.CardText>

                            </Card_1.Card>;
        })}
                </Card_1.Card>




            </div>);
    };
    return Crime;
}(React.Component));
function mapStateToProps(state) {
    console.log("main state" + JSON.stringify(state));
    return {
        activeUser: state.AuthReducer['activeUser'],
        crimes: state.ReportsReducer['crimes'],
        complaints: state.ReportsReducer['complaints'],
        reports: state.ReportsReducer['reports'],
    };
}
exports.default = react_redux_1.connect(mapStateToProps, null)(Crime);
