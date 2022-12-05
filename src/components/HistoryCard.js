import HistoryModal from "./HistoryModal";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ConfirmDeleteModal from "./ConfirmDeleteModal";

function HistoryCard(props) {
    const totals = [];

    //Calculates totals for every player
    props.game.players.map((players, index) => (
       totals.push(props.game.scoreHistory.reduce((prev, next) => prev + Number(next[index]), 0))
    ));

    //Calculates highest score to display winner
    const winner = props.game.players[totals.indexOf(Math.max(...totals))];

    return (
        <Col>
            <Card className="game-card">
                <Card.Header>
                    <Card.Title><ConfirmDeleteModal game={props.game} handleDelete={props.handleDelete} />Winner: {winner}</Card.Title>
                </Card.Header>
                <Card.Body>
                    {props.game.players.map((player, index) => (
                        <p key={index} className="card-text">{player}: {totals[index]}</p>
                    ))}
                </Card.Body>
                <Card.Footer>
                    <HistoryModal className="btn-history-home" players={props.game.players} scoreHistory={props.game.scoreHistory} totals={totals} />
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default HistoryCard;