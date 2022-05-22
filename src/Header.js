import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    let navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/" className="nav-link">Product List</Link>
                                    <Link to="/add" className="nav-link">Add Product</Link>
                                    <Link to="/update" className="nav-link">Update Product</Link>
                                </> : <>
                                    <Link to="/login" className="nav-link">Login</Link>
                                    <Link to="/register" className="nav-link">Register</Link>
                                </>
                        }
                    </Nav>
                    {localStorage.getItem('user-info') ?
                        <Nav>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header