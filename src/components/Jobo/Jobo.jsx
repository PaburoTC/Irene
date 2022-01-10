import React from "react";
import { connect } from 'react-redux';
import { setPhase } from "../../services/redux/phase/actions";
import Form from 'react-bootstrap/Form'
import jobo_photo from "./img/jobo.jpg";
import '../../styles/CSS/Jobo.css';

const Jobo = props =>{
    const validate = date =>{
        if (date.target.value === process.env.REACT_APP_ELEGANT) props.setPhase(process.env.REACT_APP_CHESS)
    }

    return(
        <React.Fragment>
            <img src={jobo_photo} alt="background"/>
            <div id="jobo-form">
                <h1>Cuanto echo en falta los viernes de Jobo, pero a este en concreto le tengo un cariño especial</h1>
                <Form.Label>Concierto de Jazz del Jobo en traje</Form.Label>
                <Form.Control type="date" onChange={validate}/>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    setPhase: phase => dispatch(setPhase(phase))
})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Jobo);
export default connectedApp;