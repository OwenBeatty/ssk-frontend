import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><h2>Scrabble Score Keeper</h2></Navbar.Brand>
                {user && <Navbar.Text><a href="/" onClick={handleClick}>Log Out</a></Navbar.Text>}
                {!user && <Navbar.Text><Link to="/login">Log In</Link></Navbar.Text>}
            </Container>
        </Navbar>
    );
}

export default NavigationBar;