import { useEffect, useState } from 'react';
import { classicRegister } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import {
  ButtonGroup,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from 'react-bootstrap';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

function RegisterPage({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, success, error } = userRegister;

  useEffect(() => {
    if (success) {
      history.push(`/confirm/${email}`);
    }
  }, [success, history]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(classicRegister(name, email, password, password2));
  };

  const emailConfirmHandler = e => e.preventDefault();
  console.log('submitted');

  return (
    <>
      <section className="login-section">
        <Container>
          <Row>
            <Col md={8} lg={6} className="m-auto">
              <h1 className="text-center">Create Account</h1>
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="name"
                    autoFocus
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    minLength="2"
                    maxLength="60"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
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

                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    minLength="8"
                    maxLength="128"
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="info">
                  Register
                </Button>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              <ButtonGroup aria-label="options">
                <Button type="button" variant="link">
                  Did not get a confirmation code
                </Button>
                <Link to="/login" vairant="link">
                  Already have an account
                </Link>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        backdrop="static"
        keyboard={false}
        show={showModal}
        onHide={handleClose}
        centered
        aria-labelledby="Modal activar email"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            Resend Confirmation Code
          </Modal.Title>
        </Modal.Header>
        <Modal.body>
          <Form onSubmit={emailConfirmHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Enviar Email
            </Button>
          </Form>
        </Modal.body>
      </Modal>
    </>
  );
}

export default RegisterPage;
