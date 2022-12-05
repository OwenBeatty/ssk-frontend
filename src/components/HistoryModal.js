import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function HistoryModal(props) {
    const [show, setShow] = useState(false);

    //Opens/closes modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className={props.className} variant="dark" onClick={handleShow}>Full History</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>History</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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

export default HistoryModal;