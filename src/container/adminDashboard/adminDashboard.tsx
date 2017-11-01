
import * as React from "react";
import { Link } from 'react-router'
import { connect } from 'react-redux';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ContentInbox from 'material-ui/svg-icons/action/search'
import ReportActions from '../../store/action/reports';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {white, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Face from 'material-ui/svg-icons/action/face';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import RecordVoiceOver from 'material-ui/svg-icons/action/record-voice-over';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar'

import Fingerprint2 from 'material-ui/svg-icons/communication/location-on';
// styles 

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textAlign:"center"
  },
   tab: {
        padding: '2px 34px',
        width: '140px',
        height: '72px',
        color: '#4b4b4b'
    }, 
    paper : {
        minWidth: 270,
        maxWidth: 270,
      },
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 80
      },
      number: {
        display: 'block',
        fontWeight: typography.fontWeightMedium,
        fontSize: 18,
        color: grey800
      },
      text: {
        fontSize: 20,
        fontWeight: typography.fontWeightLight,
        color: grey800
      },
      iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: cyan600
      }, iconSpan2: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: pink600
      }, iconSpan3: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: purple600
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: '100%'

      },
  crimeSummaryContainer: {
      paddingLeft:10,
      height: 'auto',      
      top: '20%',
      left: 0,
      right: 0,      
      margin: 'auto'
  }, 
  infoBoxDiv:{
    float: "left",
    margin:10
  },
  clear: {
    clear: 'both'
  }
};

interface IHomeProps extends React.Props<any> {
     activeUser: any;
     reports: any;
     deleteReports: (data: Object) => void;
     updateReports: (data: Object) => void;
};

 class Adminhome extends React.Component<IHomeProps, any> {
    
    constructor(){
        super();
                this.state = {
             open: false
                     }
        this.approved = this.approved.bind(this)
        this.rejected = this.rejected.bind(this)
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

     handleTouchTap = ()=> {
        this.setState({
         open: true
          });
     
        };

     showList1(obj?: Object) {
         return (obj) ? Object.keys(obj) : [];

     }
  
     approved(obj: Object){
            this.props.updateReports(obj)   
     }

      rejected(obj: Object){
            this.props.deleteReports(obj)
             this.handleTouchTap()
     }


    render () {

      var allReports = Object.keys(this.props.reports).map((k) => this.props.reports[k]);
      var missingCounter:number = 0;
      var crimeCounter:number = 0;
      var complaintCounter:number = 0;
      var allMissingReports = allReports.filter((rep, ind)=>{
        if(rep.role == 'Missing') {
          missingCounter += 1;
        }else if (rep.role == 'Crime') {
          crimeCounter += 1;
        }else if (rep.role == 'Complaint') {
          complaintCounter += 1;
        }

      })
        return (
        <div>

    <Tabs  inkBarStyle={{backgroundColor:"none", color:'none'}}>
        <Tab style={{backgroundColor:"white"}} >
          <div>
             <h2 style={styles.headline}> Welcome Admin To Crime Reports </h2>
                <Card style={{margin:'20px',paddingBottom:'20px'}}>
                        <CardHeader
                            title="All Users Reports"
                            style={{marginLeft:'20px'}}
                        />
  {/*<div style={{position: 'relative', display: 'inline-block'}}>

       <TextField
              style={{textIndent: 30}}
              hintText="Search by Name"
              
        />
               <ContentInbox style={{position: 'absolute', right: 0, top: 15, width: 20, height: 20}}/></div>*/}


 
       
      <div style={styles.crimeSummaryContainer}>
        <div style={styles.infoBoxDiv}>
         <Paper style={styles.paper}>
        <span style={styles.iconSpan}>
          <Fingerprint color={white}
                style={styles.icon}
          />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>Crimes</span>
        <span style={styles.number}>{crimeCounter}</span>
        </div>
      </Paper>
        </div>
        <div style={styles.infoBoxDiv}>
         <Paper style={styles.paper}>
        <span style={styles.iconSpan2}>
          <RecordVoiceOver color={white}
                style={styles.icon}
          />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>Complaints</span>
          <span style={styles.number}>{complaintCounter}</span>
        </div>
      </Paper>
        </div>
        <div style={styles.infoBoxDiv}>
         <Paper style={styles.paper}>
        <span style={styles.iconSpan3}>
          <Face color={white}
                style={styles.icon}
          />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>Missings</span>
          <span style={styles.number}>{missingCounter}</span>
        </div>
      </Paper>
        </div>
        
        <div style={styles.clear}/>
      
    </div>

                    {
                        this.showList1(this.props.reports).map((val, indx) => {
                            return<Card key={indx} style={{margin:'30px',marginBottom:'10px'}}>
    <CardHeader
                                    title={this.props.reports[val].role}
                                    subtitle={`Reported by ${this.props.reports[val].userName}`}
                                    avatar={this.props.reports[val].userImage}
                                    style={{display:"inline-flex"}}
                                />
                                <div style={{display:"inline-flex",float:"right",fontSize:"smaller",margin:"15px",color:"grey"}}>10:00 pm</div>
                                <CardText>

                                   <Fingerprint2 /> {this.props.reports[val].city}
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                                </CardText>
                                <CardActions>
                                     <RaisedButton label="Approve" disabled={this.props.reports[val].adminStatus == "Case Approved"} primary={true} onClick={()=>this.approved(this.props.reports[val])} />
                                     <RaisedButton label="Reject" secondary={true} onClick={()=>this.rejected(this.props.reports[val])} />
                                </CardActions>
                            </Card>
                        })
                    }
                    </Card>

      </div>
    </Tab>
  </Tabs>

<Snackbar
         open={this.state.open}
          message="Case has been Successfully Removed"
          autoHideDuration={4000}
  />
  
</div>

        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        deleteReports: (data: Object): void => dispatch(ReportActions.deleteReports(data)),
        updateReports: (data: Object): void => dispatch(ReportActions.updateReports(data))
    };
}
function mapStateToProps(state: any) {

    return {
        activeUser: state.AuthReducer['activeUser'],
        reports: state.ReportsReducer['reports'],
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Adminhome);