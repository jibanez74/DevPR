import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

function AppBar() {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  const logoutHandler = () => dispatch(logout());

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>DevPR</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="nav-res" />
        <Navbar.Collapse id="nav-res">
          <Nav className="ml-auto">
            {user ? (
              <>
                <NavDropdown title={user.attributes.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link className="links">
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link className="links">
                    <i className="fas fa-user"></i> Register
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
