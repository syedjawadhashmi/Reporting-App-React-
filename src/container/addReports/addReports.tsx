import * as React from "react";
import { connect } from "react-redux";
import { browserHistory, Link } from 'react-router'; 
import ReportActions from '../../store/action/reports';

// Components
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textAlign:"center"
  }}
const buttonStyle = {    width: '30%',
minWidth: '192px',
marginTop: '1.5rem',
textAlign: 'center',
color: 'blue' }
const style = {
  container: {
    textAlign: 'center',
    marginTop: '35px'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};
const LoginFormStyle = {
    display: 'flex',
msFlexDirection: 'column',
flexDirection: 'column',
msFlexAlign: 'center',
alignItems: 'center',
    padding: '16px',
    marginLeft: '340px',marginTop: '67px',width: '100%'
}

const fieldStyle = { width: '100%' }


interface IHomeProps extends React.Props<any> {
    activeUser: any;
    addCrimes: (data: Object) => void;
 
};


export class AddReports extends React.Component<IHomeProps, any> {


    constructor() {
        super();
        
        this.state = {
             open: false,
             crimeImage:null,
            errors: {
            action: null,
            City: null,  
            details: null,   
            startDate: null, 
            value: null 
        } 
    }
        
          this.onSubmitFunc = this.onSubmitFunc.bind(this);
          this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this._handleStartDate = this._handleStartDate.bind(this);
          this.handleTouchTap = this.handleTouchTap.bind(this);
    }

  handleTouchTap = ()=> {
    this.setState({
      open: true,
    });
  };
  
   _handleStartDate = (event:any, date:any) => {
        var currentState = this.state;
        currentState.startDate = date;
        this.setState(currentState);
    }

     handleChange = (event:any, index:any, value:any) =>
     this.setState(
     {value:value
     ,role:event.nativeEvent.target.innerText
    });
    
    keys(obj?: Object) {
        return (obj) ? Object.keys(obj) : [];
    }


    onInputChangeHandler(e: any) {
        this.setState(Object.assign({}, this.state, { [e.target.name]: e.target.value }));
    }

   getBase64(file:any) {
     var that = this;
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
         that.setState({
      crimeImage: reader.result,
    });
   };

  
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

  handleFileChange(e: any) {
        //console.log(e.target.files[0]);
        this.getBase64(e.target.files[0])
       // FirebaseServie.saveImageToFirebase(e.target.files[0].name, e.target.files[0])
    }
    onSubmitFunc(ev: any) {

        ev.preventDefault();
        let obj = Object.assign({}, this.state, {userImage:this.props.activeUser.photoURL,userId: this.props.activeUser.userId, userName: this.props.activeUser.fname +" "+this.props.activeUser.lname , adminStatus:"Case In progress"})
        delete obj.value
        delete obj.open
        const 
        {  action,city ,
            details,   
            startDate, 
            value,errors } = this.state

      if (!action ||  !city || !details|| !value || !startDate) {
        if (!action) errors.action = 'Action is Required'
        if (!city) errors.City = 'City is Required'
        if (!details) errors.details = 'details is Required'
        if (!value) errors.value = 'Report Type is Required'
        if (!startDate) errors.startDate = 'Date is Required'
        return this.setState({ errors })
      }

      this.setState({ errors: { 
            action: null,
            city: null,  
            details: null,   
            startDate: null, 
            value: null 
        }})


           this.handleTouchTap()
          this.props.addCrimes(obj);
    }

   


    render()

    
     {
           
  const items = [
         <MenuItem key={1} value={1} primaryText="Missing" />,
         <MenuItem key={2} value={2} primaryText="Complaint" />,
         <MenuItem key={3} value={3} primaryText="Crime" />,
         ];
          const css = `
  .dropZoneOverlay, .FileUpload {
            width: 283px;
            height: 71px;
        }

        .dropZoneOverlay {
            border: dotted 1px;
            font-family: cursive;
            color: #7066fb;
            position: absolute;
            top: 0px;
            text-align: center;
        }

        .FileUpload {
            opacity: 0;
            position: relative;
            z-index: 1;
        }
.image-upload > input
{
    display: none;
}
        input#file {
  display: inline-block;
  width: 100%;
  padding: 120px 0 0 0;
  height: 100px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url('http://www.freebiesgallery.com/wp-content/uploads/2014/02/drag-and-drop-file-upload.png') center center no-repeat #e4e4e4;
  border-radius: 20px;
  background-size: 150px 100px;
}
 `
       return (

             <div className='Login' style={{marginLeft: '40px',marginTop: '67px',width: '90%'}}>
                 <style>
                     {css}
                     </style>
                      <h2 style={styles.headline}> File a Crime Scene </h2>
                <Paper className='Login-Panel'>
                    <form style={{padding: '16px',margin:'0px'}} className='LoginForm'  onSubmit={this.onSubmitFunc}>

                        <TextField
                            hintText='Action Taken'
                            floatingLabelText='Action Taken'
                             onChange={this.onInputChangeHandler}
                                    name='action'
                            style={fieldStyle}
                              errorText={this.state.errors.action}
                        />
                        <TextField
                            hintText='City'
                            floatingLabelText='City'   
                               onChange={this.onInputChangeHandler}
                                 errorText={this.state.errors.City}
                                    name='city'
                            style={fieldStyle}
                        />
                        <TextField
                            hintText='Details'
                            floatingLabelText='Details'
                           onChange={this.onInputChangeHandler}
                             errorText={this.state.errors.details}
                                    name='details'
                            style={fieldStyle}
                        />
                        <DatePicker hintText="Crime Date" value={this.state.startDate}   errorText={this.state.errors.startDate} onChange={this._handleStartDate}  mode="landscape" />

                        <SelectField
                         value={this.state.value}
                         onChange={this.handleChange}
                           errorText={this.state.errors.value}
                         floatingLabelText="Add your Report Type"
                         floatingLabelFixed={true}
                         hintText="Report Types"
                         >
                         {items}
                         </SelectField>
                  <div>
                     {/*<input id="file" type="file" onChange={this.handleFileChange.bind(this)}/>*/}
                   <div className="image-upload">
    <label htmlFor="file-input">
        <img style={{height:"30vh",cursor:"pointer"}} src={ this.state.crimeImage ? this.state.crimeImage:"http://www.freebiesgallery.com/wp-content/uploads/2014/02/drag-and-drop-file-upload.png"}/>
    </label>

    <input onChange={this.handleFileChange.bind(this)} id="file-input" type="file"/>
{this.state.open? (
            <div style={style.container}>
              <RefreshIndicator
                size={50}
                left={70}
                top={0}
                status="loading"
                style={style.refresh}
              />
            </div>
          ) : ""
 }

</div>

 
                 </div>

        
        
        
                        <div className='LoginForm-Submit' style={{textAlign:"center"}}>
                            <RaisedButton
                                label='Register Reports'
                                primary
                                type='submit'
                                style={buttonStyle}
                            />
                        </div>
                    </form>
                </Paper>
                
                <Snackbar
          open={this.state.open}
          message="Your Report has been added"
          autoHideDuration={4000}
        />
     </div>
                
            
       )
    } 
}


function mapStateToProps(state: any) {
    return {
        activeUser: state.AuthReducer['activeUser'],
       };
}

function mapDispatchToProps(dispatch: any) {
    return {
        addCrimes: (data: Object): void => dispatch(ReportActions.addCrimes(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReports);
