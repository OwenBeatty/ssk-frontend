import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(username, password);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h3 className="page-title">Sign Up</h3>
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
                <p><Button variant="dark btn-form" type="submit" disabled={isLoading}>Sign Up</Button><span className="login-signup-redirect">Have an account? <Link to="/login">Log in</Link></span></p>
                {error && <div className="error">{error}</div>}
                
            </Form>
        </Container>
    );
}

export default Signup;