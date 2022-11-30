import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function AddPlayers(props) {
    const [players, setPlayers] = useState(["", ""]);

    const handleChange = (e, index) => {
        const newPlayers = [...players];
        newPlayers[index] = e.target.value;

        setPlayers(newPlayers);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        props.handleSetPlayers(players);
    }

    //add additional players
    const handleAddPlayers = () => {
        setPlayers([...players, ""]);
    }

    //remove additional players
    const handleRemovePlayers = (index) => {
        players.splice(index, 1)
        setPlayers([...players])
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1 className="page-title">Players</h1>
            {players.map((player, index) => (
                <InputGroup key={index} className="mb-3">
                    <Form.Control
                        required
                        className="control-add-players"
                        type="text"
                        placeholder={"Player " + (index + 1)}
                        onChange={(e) => handleChange(e, index)}
                        value={player}
                    />{index > 1 && <Button variant="outline-secondary" onClick={() => {handleRemovePlayers(index)}}>𐌢</Button>}
                </InputGroup>
            ))}
            {players.length < 4 && <Button className="additional-player" variant="outline-dark" onClick={handleAddPlayers}>Add Additional Player</Button>}
            <Button variant="dark btn-form" type="submit">Next</Button>
        </Form>
    );
}

export default AddPlayers;