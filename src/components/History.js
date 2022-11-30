import { useEffect } from "react";
import { useGamesContext } from "../hooks/useGamesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HistoryCard from "./HistoryCard";

function HistoryList() {
    const { games, dispatch } = useGamesContext();
    const { user } = useAuthContext();

    //fetch all games from current user to list out
    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch("https://average-tank-top-moth.cyclic.app/api/game", {
                mode: "cors",
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_GAMES", payload: json });
            }
        }

        if (user) {
            fetchGames();
        }
    }, [dispatch, user]);

    //delete single game
    const handleDelete = async (game) => {
        if (!user) {
            return
        }

        const response = await fetch("https://average-tank-top-moth.cyclic.app/api/game/" + game._id, {
            mode: "cors",
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_GAME", payload: json });
        }
    }

    return (
        <Container>
            <h1 className="page-title">Game History</h1>
            <Row xs={1} md={2} xl={3}>
                <Col>
                    <Card className="game-card">
                        <Card.Body className="new-game">
                            <Card.Title ><Link to="/newgame">{JSON.parse(localStorage.getItem("players")) ? "Continue Game" : "New Game"}</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                {user && games && games.map((game, index) => (
                    <HistoryCard key={uuidv4()} index={index} game={game} handleDelete={handleDelete} />
                ))}
            </Row>
        </Container>
    );
}

export default HistoryList;