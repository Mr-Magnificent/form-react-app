import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Steps from './Steps';

class App extends Component {
    /*
    * props is an object that contains the properties sent to */
    constructor(props) {
        super(props);

    }


  render() {
      const {data = {}} = this.props;
      const {title = "", steps = []} = data;
      // console.log("hello", data);
    return (
      <div>
          <AppBar position="static" color="secondary">
              <Toolbar>
                <Typography variant={"title"}>
                  {title}
                </Typography>
              </Toolbar>
          </AppBar>
          <Steps data={steps}/>
      </div>
    );
  }
}

export default App;