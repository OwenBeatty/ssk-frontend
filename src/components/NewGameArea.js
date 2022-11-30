import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Container from 'react-bootstrap/Container';
import AddPlayers from "./AddPlayers";
import ScoreKeeper from "./ScoreKeeper";

function NewGameArea() {
    const navigate = useNavigate();

    const { user } = useAuthContext();

    const [players, setPlayers] = useState(JSON.parse(localStorage.getItem("players")) ? [...JSON.parse(localStorage.getItem("players"))] : []);
    const [scoreHistory, setScores] = useState(JSON.parse(localStorage.getItem("scores")) ? [...JSON.parse(localStorage.getItem("scores"))] : []);
    const [error, setError] = useState(null);

    const handleSetPlayers = (p) => {
        localStorage.setItem("players", JSON.stringify([...p]));
        setPlayers([...p]);
    }

    const handleSetScores = (s) => {
        localStorage.setItem("scores", JSON.stringify([...scoreHistory, s]));
        setScores([...scoreHistory, s]);
    }

    const handleSubmit = async (s) => {
        if (!user) {
            setError("You must be logged in");
            return;
        }

        const game = {players, scoreHistory: [...scoreHistory, s]}

        const response = await fetch("https://average-tank-top-moth.cyclic.app/api/game", {
            mode: "cors",
            method: "POST",
            body: JSON.stringify(game),
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setPlayers([]);
            setScores([]);
            setError(null);

            localStorage.removeItem("players");
            localStorage.removeItem("scores");
            localStorage.removeItem("turn");

            console.log("new game added", json);

            navigate("/");
        }
    }

    return (
        <Container>
            {players.length < 1 && <AddPlayers handleSetPlayers={handleSetPlayers} />}
            {players.length > 0 && <ScoreKeeper players={players} scoreHistory={scoreHistory} error={error} handleSetScores={handleSetScores} handleSubmit={handleSubmit} />}
        </Container>
    );
}

export default NewGameArea;