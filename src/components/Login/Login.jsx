import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { setPhase } from '../../services/redux/phase/actions'
import retiro from './img/retiro.jpg'
import '../../styles/CSS/Login.css';

const Login = props => {

    const validate = date =>{
        if (date.target.value === process.env.REACT_APP_ANNIVERSARY) props.setPhase(process.env.REACT_APP_FAMILY)
    }

    return(
        <React.Fragment>
            <img src={retiro}/>
            <Form.Label id="login_label">Día en el que empezó todo</Form.Label>
            <Form.Control id="login_input" type="date" format="dd/mm/yyyy" placeholder="Aniversario" onChange={validate}/>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    setPhase: phase => dispatch(setPhase(phase))
})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connectedApp;