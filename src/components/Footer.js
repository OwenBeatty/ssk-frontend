import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark" className="py-0">
            <Container fluid>
                <Navbar.Text><a href="https://www.owenbeatty.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-house-fill"></i> Website by Owen Beatty</a></Navbar.Text>
                <Navbar.Text><a href="https://github.com/OwenBeatty/ssk-frontend" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i> Repository</a></Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Footer;