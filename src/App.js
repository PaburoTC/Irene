import React from 'react';
import { connect } from 'react-redux';
import Login from './components/Login/Login'
const App = (props) => {

  
  return (
    <React.Fragment>
      {props.state.login.login ? <h1>YES</h1>:<Login/>}
    </React.Fragment>
  );
}
const matStateToProps = state => ({state:state})
const connectedApp = connect(matStateToProps, {})(App)
export default connectedApp;
