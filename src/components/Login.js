import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/UseLogin";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(username, password);
        navigate("/");
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h3 className="page-title">Log In</h3>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    size="lg"
                    type="text" 
                    placeholder="Enter Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username} 
                />
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    size="lg"
                    type="password" 
                    placeholder="Enter Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                />
                <p><Button variant="dark btn-form" type="submit" disabled={isLoading}>Log In</Button><span className="login-signup-redirect">No account? <Link to="/signup">Sign up</Link></span></p>
                {error && <div className="error">{error}</div>}
            </Form>
        </Container>
    );
}

export default Login;