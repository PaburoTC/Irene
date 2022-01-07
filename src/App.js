import React from 'react';
import { connect } from 'react-redux';
import Login from './components/Login/Login';
import Family from './components/Family/Family';
import Jobo from './components/Jobo/Jobo';
import Final from './components/Final/Final';

const App = (props) => {
  switch(props.state.phase){
    case process.env.REACT_APP_LOGIN: return <Login/>
    case process.env.REACT_APP_FAMILY: return <Family/>
    case process.env.REACT_APP_JOBO: return <Jobo/>
    case process.env.REACT_APP_FINAL: return <Final/>
    default: return <h1>NEXT</h1>
  }
}

const matStateToProps = state => ({state:state})
const connectedApp = connect(matStateToProps, {})(App)
export default connectedApp;
