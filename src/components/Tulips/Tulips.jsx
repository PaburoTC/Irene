import React from "react";
import { connect } from 'react-redux';
import { setPhase } from "../../services/redux/phase/actions";
import Form from 'react-bootstrap/Form'
import plants from './img/plants.jpg';

const Tulips = props => {
    const validate = date =>{
        if (date.target.value === process.env.REACT_APP_PLANTS) props.setPhase(process.env.REACT_APP_FINAL)
    }

    return(
        <React.Fragment>
            <img src={plants} alt="background"/>
            <div id="jobo-form">
                <h1>Que ilusión me hizo ver a los tulipanes crecer, muchas gracias por cuidarlos </h1>
                <Form.Label>Primera carta en la que menciono el nombre de nuestros tres hijitos (0xFFF)</Form.Label>
                <Form.Control type="text" onChange={validate}/>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    setPhase: phase => dispatch(setPhase(phase))
})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Tulips);
export default connectedApp;