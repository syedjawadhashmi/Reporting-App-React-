
import * as React from "react";


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
interface IHomeProps extends React.Props<any> {
    activeUser: any;
    crimes: any;
};
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textAlign:"center"
  }}
class Crime extends React.Component<IHomeProps, any> {

    showList1(obj?: Object) {
        return (obj) ? Object.keys(obj) : [];
    }
  
    render () {

        let crimeArray = this.showList1(this.props.crimes).map((val, indx) => {
            
            return <Card key={indx} style={{width: '300px',marginBottom: '30px', marginLeft: '5px', marginRight: '30px'}}>
                <CardMedia>
                    <img src={this.props.crimes[val].crimeImage} style={{height:"35vh"}}/>
                </CardMedia>
               <CardHeader
          title={this.props.crimes[val].role}
          subtitle={`Reported by ${this.props.activeUser.fname} ${this.props.activeUser.lname}`}
          avatar={this.props.activeUser.photoURL ? this.props.activeUser.photoURL : "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=500"}
        />
 <CardText color="rgba(62, 62, 62, 0.87)" style={{padding:"0 0px 9px 18px",fontSize:"11px"}}>
     {this.props.crimes[val].details}
    </CardText>
     <Divider />
      {
this.props.crimes[val].adminStatus == "Case In progress" ? (
                <RaisedButton
                    label='Case On Pending'
                    secondary={true}
                    fullWidth={true}
                />

            ) : <RaisedButton
                    label='Case Approved'
                    primary={true}
                    fullWidth={true}
                />

      }
            </Card>
        })
        
        return (
            <div>
                 <h2 style={styles.headline}> Crime Reports </h2>
 
                {
                    <div style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-around', margin: '20px'}}>
                        
                       
                        {crimeArray}
                    </div>

                }


            </div>
        )
    }
}


function mapStateToProps(state: any) {
    return {
        activeUser: state.AuthReducer['activeUser'],
        crimes: state.ReportsReducer['crimes']
    };
}

export default connect(mapStateToProps,null)(Crime);