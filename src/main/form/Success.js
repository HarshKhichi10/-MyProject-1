import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';





class Success extends Component {
    
    continue =(e) =>{
        e.preventDefault();
        this.props.nextStep();   
 
    }


    back =(e) => {
        e.preventDefault();
        this.props.prevStep();   
 
    }
   
    render() {
  

         return (
            <MuiThemeProvider>
              <React.Fragment>   
               <AppBar style={{backgroundColor:'#5792CF'}} title="Submission Successful" />
                    <h1> Thank You  Your Submission  is Done</h1>
                    <h2> You Are Now the Part of the School</h2>
             </React.Fragment>
            </MuiThemeProvider>
                
            
        );
    }
}

const styles ={

    button:{
     margin : 15

    }
}
export default Success;