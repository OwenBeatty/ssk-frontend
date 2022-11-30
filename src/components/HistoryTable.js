import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HistoryTable(props) {


    return (
        <Container>
            <Row xs={2} className='flex-nowrap'>
                <Col xs="auto">
                    <Table>
                        <thead>
                            <tr>
                                <th>turn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.players.map((player, index) => (
                                <tr>
                                    <td>{player}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col xs="auto">
                    <Table className='table-history' responsive>
                        <thead>
                            <tr>
                                {props.allScores.map((score, index) => (
                                    <th>{index + 1}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {props.players.map((player, index) => (
                                <tr>
                                    {props.allScores.map((score) => (
                                        <td className="td-score">{score[index]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                {/* <Col xs="auto">
                    <Table>
                        <thead>
                            <tr>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.players.map((player, index) => (
                                <tr>
                                    <td>{props.allScores.reduce((prev, next) => prev + Number(next[index]), 0)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col> */}
            </Row>
        </Container>
    );
}

export default HistoryTable;