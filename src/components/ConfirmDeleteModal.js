import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

function ConfirmDeleteModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Used as a second step when deleted to prevent accidental deletions
    return(
        <div>
            <CloseButton onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>This cannot be undone.</p>
                    <Button className="btn-confirm-delete" variant="danger" onClick={() => {props.handleDelete(props.game)}}>Confirm</Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ConfirmDeleteModal;