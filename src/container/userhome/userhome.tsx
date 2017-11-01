
import * as React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar'

import Fingerprint from 'material-ui/svg-icons/communication/location-on';
interface IHomeProps extends React.Props<any> {
    activeUser: any;
    userReports: any;
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textAlign:"center"
  }}

 class Userhome extends React.Component<IHomeProps, any> {

    constructor() {
        super();
        this.state = {
             open: true
        }
    }
     showList1(obj?: Object) {
         return (obj) ? Object.keys(obj) : [];
     }
    
    render () {
        return (
        <div>
<h2 style={styles.headline}> Welcome {`${this.props.activeUser.fname} ${this.props.activeUser.lname}`} To Crime Scene </h2>
  {/*<img style={{ height: "7vh", marginTop: "10px",  }} src="http://orig10.deviantart.net/a871/f/2015/353/6/5/crime_scene_tape_by_mrangrydog-d9kqd8a.png" />*/}

                <Card style={{margin:'20px',paddingBottom:'10px'}}>
                        <CardHeader
                            title="View Reports"
                            style={{marginLeft:'20px'}}
                        />


                    {
                       
                       
                        this.showList1(this.props.userReports).map((val, indx) => {
                            return<Card key={indx} style={{margin:'30px',marginBottom:'10px'}}>

                                <CardHeader
                                    title={this.props.userReports[val].role}
                                    subtitle={`Reported by ${this.props.userReports[val].userName}`}
                                    avatar={this.props.userReports[val].userImage}
                                    style={{display:"inline-flex"}}
                                />
                                <div style={{display:"inline-flex",float:"right",fontSize:"smaller",margin:"15px",color:"grey"}}>10:00 pm</div>
                                <CardText>

                                   <Fingerprint /> {this.props.userReports[val].city}
                                    <br/>
                                    <br/>
                                     {this.props.userReports[val].details}
                                     <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                                </CardText>

                            </Card>

                        })
                    }
                    </Card>



     <Snackbar
          open={this.state.open}
          message="Welcome to Crime Report"
          autoHideDuration={4000}
        />
            </div>
      

        )
    }
}


function mapStateToProps(state: any) {
   
    return {
        activeUser: state.AuthReducer['activeUser'],
        userReports: state.ReportsReducer['userReports']
    };
}

export default connect(mapStateToProps,null)(Userhome);