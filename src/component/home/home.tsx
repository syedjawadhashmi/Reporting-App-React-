import * as React from "react";
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import Navbar from "./../../container/Navbar/Navbar";
import { connect } from 'react-redux'
import AuthActions from "./../../store/action/auth";


// Components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
const buttonStyle = { color: 'white' }
const stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png'
const originSettings = { horizontal: 'right', vertical: 'bottom' }
const avatarSize = 50


export default  class Home extends React.Component<any, any> {

    constructor() {
        super();
                 }

    render() {
        const mainMenu = (
            <Card>
                <CardMedia>
                    <img style={{height:"90vh"}} src="http://wallpapercave.com/wp/UemfOh9.jpg" />
                </CardMedia>
            </Card>
        )

        return (
            <div>
                {mainMenu}
            </div>
               )

    }
}


