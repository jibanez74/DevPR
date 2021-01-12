import { useEffect, useState } from 'react';
import { classicLogin } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Message from '../components/Message';

function LoginPage({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error } = userLogin;

  const submitHandler = e => {
    e.preventDefault();
    dispatch(classicLogin(email, password));
  };

  return (
    <section className="login-section">
      <Container>
        <Row>
          <Col md={8} lg={6} className="m-auto">
            <h1 className="text-center">Sign In</h1>
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}

            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  autoFocus
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  minLength="8"
                  maxLength="128"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="info">
                sign in
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LoginPage;
