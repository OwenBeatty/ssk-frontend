import { useState } from "react";
import HistoryModal from "./HistoryModal";
import EndGameModal from "./EndGameModal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ScoreKeeper(props) {
    const [turn, setTurn] = useState(JSON.parse(localStorage.getItem("turn")) ? JSON.parse(localStorage.getItem("turn")) : 1);
    const [scores, setScores] = useState(Array(props.players.length).fill(""));

    const totals = [];

    props.players.map((players, index) => (
       totals.push([...props.scoreHistory, scores].reduce((prev, next) => prev + Number(next[index]), 0))
    ));

    const handleChange = (e, index) => {
        const newScores = [...scores];
        newScores[index] = e.target.value;

        setScores(newScores);
    } 

    const handleTurnSubmit = (e) => {
        e.preventDefault();

        props.handleSetScores(scores);
        setScores(Array(props.players.length).fill(""));

        localStorage.setItem("turn", JSON.stringify(turn + 1))
        setTurn(turn + 1);
    }

    const handleEndGameModal = () => {
        const newScores = [...scores];
        scores.forEach(function(score, index) {
            if (score === "") {
                newScores[index] = 0;
                setScores(newScores);
            }
        })
    }

    const handleEndGame = () => {
        props.handleSubmit(scores);
    }
//<Button variant="danger btn-form" name="btn-end" type="submit" className="btn-end-game">End Game</Button>
//<EndGameModal handleEndGameModal={handleEndGameModal} players={props.players} scoreHistory={[...props.scoreHistory, scores]} totals={totals} />
    return (
        <div>
            <Form onSubmit={handleTurnSubmit}>
                <Form.Group as={Row} className="turn-row">
                    <Col xs="auto"><h3 className="turn-title">Turn {turn}</h3></Col>
                    <Col><EndGameModal handleEndGameModal={handleEndGameModal} handleEndGame={handleEndGame} players={props.players} scoreHistory={[...props.scoreHistory, scores]} totals={totals} /></Col>
                </Form.Group>
                
                {scores.map((score, index) => (
                    <Form.Group key={index} as={Row} className="mb-3">
                        <Form.Label column xs="2"><h4>{props.players[index]}</h4></Form.Label>
                        <Col xs="10">
                            <Form.Control
                                required
                                type="number" 
                                onChange={(e) => handleChange(e, index)}
                                value={score}
                            />
                        </Col>
                    </Form.Group>
                ))}
                <Form.Group as={Row}>
                    <Col><HistoryModal players={props.players} scoreHistory={props.scoreHistory} totals={totals} /></Col>
                    <Col><Button className="btn-next" variant="dark btn-form" name="btn-next" type="submit">Next</Button></Col>
                </Form.Group>
                
                
            </Form>
            
        </div>
    );
}

export default ScoreKeeper;