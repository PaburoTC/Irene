import React from "react";
import { connect } from 'react-redux';
import { setPhase } from "../../services/redux/phase/actions";
import Form from 'react-bootstrap/Form'
import photo from './img/chess.jpg';
import '../../styles/CSS/Chess.css';

const Chess = props => {
    const validate = date =>{
        if (date.target.value === process.env.REACT_APP_CHESS_VICTORIES) props.setPhase(process.env.REACT_APP_TULIPS)
    }

    return(
        <div id="chess">
            <img id="chess-background" src={photo} alt="background"/>
            <div id="jobo-form">
                <h1>Ahora que eres capaz de ganarme al pádel (y con mascarilla), me veo obligado a llevarte a mi terreno.</h1>
                <Form.Label>Número de veces que me has ganado al ajedrez</Form.Label>
                <Form.Control type="number" placeholder="Tranquila, no se aleja mucho del equivalente en padél" onChange={validate}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    setPhase: phase => dispatch(setPhase(phase))
})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Chess);
export default connectedApp;