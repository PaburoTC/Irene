import React, {useEffect} from "react";
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { setPhase } from "../../services/redux/phase/actions";
import { setMaternal, setPaternal } from '../../services/redux/family/actions'
import '../../styles/CSS/Family.css';

const Family = props => {

    const done = ()=>{
        var completed = true
        Object.keys(props.state.family.maternal).forEach(key => completed = completed && props.state.family.maternal[key].correct)
        Object.keys(props.state.family.paternal).forEach(key => completed = completed && props.state.family.paternal[key].correct)
        console.log(completed)
        if(completed) props.setPhase(process.env.REACT_APP_JOBO)
    }

    const validate = event => {
        const [side, relative] = event.target.name.split('-')
        const data = {}
        switch(side){
            case 'maternal':
                data[relative] = {
                    'name': event.target.value,
                    'correct': event.target.value.toLowerCase() === process.env[`REACT_APP_MATERNAL_${relative.toUpperCase()}`].toLowerCase()
                }
                props.setMaternal(data)
                break
            case 'paternal':
                data[relative] = {
                    'name': event.target.value,
                    'correct': event.target.value.toLowerCase() === process.env[`REACT_APP_PATERNAL_${relative.toUpperCase()}`].toLowerCase()
                }
                props.setPaternal(data)
                break
            default:
                break
        }
    }

    useEffect(done)

    return(
        <Form id="family">
            <div id="family-intro">
                <h1>Sabemos que se me dan mal los nombres, pero vamos a ver que tal se te dan a tuuu</h1>
                <p>Pista: únicamente el primer nombre y no te ólvides de las tíldes!</p>
            </div>
            <div className="family-side">
                <h2>Familia Materna</h2>
                <Form.Group id="family-grand" className="family-level">
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Abuelo" value={props.state.family.maternal.grandpa.name} name="maternal-grandpa" onChange={validate} readOnly={props.state.family.maternal.grandpa.correct}/>
                        <Form.Control type="text" placeholder="Abuela" value={props.state.family.maternal.grandma.name} name="maternal-grandma" onChange={validate} readOnly={props.state.family.maternal.grandma.correct}/>
                    </Form.Group>
                </Form.Group>
                <Form.Group id="family-uncles" className="family-level">
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Carlos" readOnly/>
                        <Form.Control type="text" placeholder="Yoli" readOnly/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Julian" readOnly/>
                        <Form.Control type="text" placeholder="Blanca" readOnly/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Madre" value={props.state.family.maternal.mother.name} name="maternal-mother" onChange={validate} readOnly={props.state.family.maternal.mother.correct}/>
                        <Form.Control type="text" placeholder="Padre" value={props.state.family.maternal.father.name} name="maternal-father" onChange={validate} readOnly={props.state.family.maternal.father.correct}/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Luis" readOnly/>
                        <Form.Control type="text" placeholder="Olga" readOnly/>
                    </Form.Group>
                </Form.Group>
                <Form.Group id="family-cousins" className="family-level">
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Primo" value={props.state.family.maternal.cousin1.name} name="maternal-cousin1" onChange={validate} readOnly={props.state.family.maternal.cousin1.correct}/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Primo" value={props.state.family.maternal.cousin2.name} name="maternal-cousin2" onChange={validate} readOnly={props.state.family.maternal.cousin2.correct}/>
                        <Form.Control type="text" placeholder="Prima" value={props.state.family.maternal.cousin3.name} name="maternal-cousin3" onChange={validate} readOnly={props.state.family.maternal.cousin3.correct}/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Hermana" value={props.state.family.maternal.sister.name} name="maternal-sister" onChange={validate} readOnly={props.state.family.maternal.sister.correct}/>
                        <Form.Control type="text" placeholder="Bebote" readOnly/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Alina" readOnly/>
                        <Form.Control type="text" placeholder="Leire" readOnly/>
                    </Form.Group>
                </Form.Group>
            </div>
            <div className="family-side">
                <h2>Familia Paterna</h2>
                <Form.Group id="family-grand" className="family-level">
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Abuelo" value={props.state.family.paternal.grandpa.name} name="paternal-grandpa" onChange={validate} readOnly={props.state.family.paternal.grandpa.correct}/>
                        <Form.Control type="text" placeholder="Abuela" value={props.state.family.paternal.grandma.name} name="paternal-grandma" onChange={validate} readOnly={props.state.family.paternal.grandma.correct}/>
                    </Form.Group>
                </Form.Group>
                <Form.Group id="family-uncles" className="family-level">
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Mariví" readOnly/>
                        <Form.Control type="text" placeholder="Gerardo" readOnly/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Óscar" readOnly/>
                        <Form.Control type="text" placeholder="Celia" readOnly/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Madre" value={props.state.family.maternal.mother.name} name="maternal-mother" onChange={validate} readOnly={props.state.family.maternal.mother.correct}/>
                        <Form.Control type="text" placeholder="Padre" value={props.state.family.maternal.father.name} name="maternal-father" onChange={validate} readOnly={props.state.family.maternal.father.correct}/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Pilar" readOnly/>
                        <Form.Control type="text" placeholder="José Luis" readOnly/>
                    </Form.Group>
                </Form.Group>
                <Form.Group id="family-cousins" className="family-level">
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Noelia" readOnly/>
                        <Form.Control type="text" placeholder="Roberto" readOnly/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Primo" value={props.state.family.paternal.cousin4.name} name="paternal-cousin4" onChange={validate} readOnly={props.state.family.paternal.cousin4.correct}/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Hermana" value={props.state.family.maternal.sister.name} name="maternal-sister" onChange={validate} readOnly={props.state.family.maternal.sister.correct}/>
                        <Form.Control type="text" placeholder="Bebote" readOnly/>
                    </Form.Group>
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Prima" value={props.state.family.paternal.cousin1.name} name="paternal-cousin1" onChange={validate} readOnly={props.state.family.paternal.cousin1.correct}/>
                        <Form.Control type="text" placeholder="Prima" value={props.state.family.paternal.cousin2.name} name="paternal-cousin2" onChange={validate} readOnly={props.state.family.paternal.cousin2.correct}/>
                        <Form.Control type="text" placeholder="Prima" value={props.state.family.paternal.cousin3.name} name="paternal-cousin3" onChange={validate} readOnly={props.state.family.paternal.cousin3.correct}/>
                    </Form.Group>
                </Form.Group>
                <Form.Group id="family-nephews" className="family-level">
                    <Form.Group className="couple">
                        <Form.Control type="text" placeholder="Sobrino" value={props.state.family.paternal.nephew.name} name="paternal-nephew" onChange={validate} readOnly={props.state.family.paternal.nephew.correct}/>
                    </Form.Group>
                    <div className="couple"/>
                    <div className="couple"/>
                    <div className="couple"/>
                </Form.Group>
            </div>
        </Form>    
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    setPhase: phase => dispatch(setPhase(phase)),
    setMaternal: data => dispatch(setMaternal(data)),
    setPaternal: data => dispatch(setPaternal(data))
})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Family);
export default connectedApp;