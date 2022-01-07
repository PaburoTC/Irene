import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import '../../styles/CSS/Final.css';

const Final = () => {

    
    return (
        
        <Form id='final'>
            <h1>¡Muchísimas felicidades mi amor!</h1>
            <h2>Tras tanto desafio, es hora de desvelar tu regalo, espero que lo podamos disfrutar pronto.</h2>
            <h3>Usuario</h3>
            <Form.Control type='text' value={process.env.REACT_APP_FINAL_USER} readOnly/>

            <h3>Contraseña</h3>
            <Form.Control type='text' value={process.env.REACT_APP_FINAL_PSWD} readOnly/>
            <Button variant="outline-primary" onClick={()=>window.open("https://www.wonderbox.es/login")}>Log In</Button>
        </Form>
    )
}

export default Final