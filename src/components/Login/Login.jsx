import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { setPhase } from '../../services/redux/phase/actions'
import '../../styles/CSS/Login.css';

const Login = props => {

    const validate = date =>{
        if (date.target.value === process.env.REACT_APP_ANNIVERSARY){
            props.setPhase('family')
        }
    }

    return(
        <Form.Group id="login-form">
            <Form.Label>Día en el que empezó todo</Form.Label>
            <Form.Control type="date" placeholder="Aniversario" onChange={validate}/>
        </Form.Group>
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    setPhase: phase => dispatch(setPhase(phase))
})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connectedApp;