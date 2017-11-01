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
var react_redux_1 = require("react-redux");
//import UsersList from '../../components/userList/userList';
var Userhome = (function (_super) {
    __extends(Userhome, _super);
    function Userhome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Userhome.prototype.render = function () {
        return (
        // <div>
        //     {
        //         !this.props.children ? <Card style={{margin:'20px'}}>
        //                 <CardHeader
        //                     title="View Reports"
        //                     style={{marginLeft:'20px'}}
        //                 />
        //
        //                 {
        //
        //                     this.props.missings.isloaded ? this.showUsersList(this.props.missings.missingData).map(user =>
        //
        //                             <Card style={{margin:'30px',marginBottom:'10px'}}>
        //                                 <CardHeader
        //                                     title={user.name}
        //                                     subtitle={user.role}
        //                                     avatar={user.url}
        //                                 />
        //                                 <CardText>
        //
        //                                     {user.details}
        //                                     <br/>
        //                                     <br/>
        //                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                                     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        //                                     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        //                                     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        //
        //                                 </CardText>
        //
        //
        //                                 {/*<CardMedia
        //                                  overlay={<CardTitle title={user.name} subtitle="Overlay subtitle"/>}
        //                                  >
        //                                  <img src={user.url} style={{height:'200px'}}/>
        //                                  </CardMedia>
        //                                  <CardTitle style={{textDecoration:'none'}} title={
        //                                  <Link  style={{textDecoration:'none'}} to={`/${this.props.params.userid}/missings/${user.uid}` }>
        //                                  {user.name}
        //                                  </Link>
        //                                  } subtitle="Card subtitle"/>
        //                                  <CardText>
        //                                  {user.name}
        //                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        //                                  </CardText>*/}
        //                             </Card>
        //                         ) : ''
        //
        //
        //
        //                 }
        //             </Card> :<div>{this.props.children}</div>
        //
        //     }
        //
        //
        // </div>
        <div>
              <h1>welcome crime report</h1>
            </div>);
    };
    return Userhome;
}(React.Component));
/*const mapStateToProps = (state) => {
    console.log("users page "+state)
    return {

        auth: state.auth ,
        missings: state.missingData
    };
};*/
exports.default = react_redux_1.connect(null, null)(userhome);
