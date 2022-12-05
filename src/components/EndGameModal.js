import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function EndGameModal(props) {
    const [show, setShow] = useState(props.show);

    //Closes modal
    const handleClose = () => setShow(false);

    //Opens modal
    const handleShow = () => {
        props.handleEndGameModal();
        setShow(true);
    }

    //Calculates highest score to display winner
    const winner = props.players[props.totals.indexOf(Math.max(...props.totals))];

    return (
        <div>
            <Button className="btn-end-game" variant="success" onClick={handleShow}>End Game</Button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Winner: {winner}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {props.error && <div className="error alert alert-danger">{props.error}</div>}
                        <Button variant="success" className="btn-confirm-end-game" onClick={props.handleEndGame}>Save Game and Exit</Button>
                        <h5>Score History</h5>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">Turn</th>
                                    {props.players.map(player => (
                                        <th key={uuidv4()} scope="col">{player}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {props.scoreHistory.map((scores, index) => (
                                    <tr key={uuidv4()}>
                                        <th scope="row">{index + 1}</th>
                                        {scores.map(score => (
                                            <td key={uuidv4()}>{score}</td>
                                        ))}
                                    </tr>
                                ))}
                                <tr>
                                    <th>Total</th>
                                    {props.totals.map((total) => (
                                        <td key={uuidv4()}>{total}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
            </Modal>
        </div>
    );
}

export default EndGameModal;