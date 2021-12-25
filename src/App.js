import React from 'react';
import { connect } from 'react-redux';
import Login from './components/Login/Login';
import Family from './components/Family/Family';

const App = (props) => {
  switch(props.state.phase){
    case 'login': return <Login/>
    case 'family': return <Family/>
    default: return <h1>NEXT</h1>
  }
}

const matStateToProps = state => ({state:state})
const connectedApp = connect(matStateToProps, {})(App)
export default connectedApp;
