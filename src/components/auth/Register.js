import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../layouts/PageHeader';
import SocialProviders from './SocialProviders';
import Message from '../layouts/Message';
import Loader from '../layouts/Loader';
import {
  Modal,
  Card,
  Container,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';

function Register({ history }) {
  const welcomeText =
    'You can sign up with your email and password, or by using a social provider.';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (user) {
      history.push('/dashboard');
    }
  });

  const registerHandler = async e => {
    e.preventDefault();

    setLoading(true);

    if (password !== password2) {
      setMessage('Passwords do not match');
      setLoading(false);
    } else {
      try {
        await Auth.signUp({
          username: email,
          password,
          attributes: {
            name,
          },
        });

        history.push(`/confirm/${email}`);
      } catch (error) {
        setMessage(error.message);
        setLoading(false);
      }
    }
  };

  const resendConfirmationHandler = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await Auth.resendSignUp(email);
      history.push(`/confirm/${email}`);
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <PageHeader title="Create Account" msg={welcomeText} />
      <section className="auth-section py-3">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8} lg={6}>
              <Card body className="p-4">
                <SocialProviders />
                <hr />
                <Form onSubmit={registerHandler}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="name">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                      type="name"
                      required
                      minLength="2"
                      maxLength="60"
                      value={name}
                      onChange={e => setName(e.target.value)}
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
                  <Form.Group controlId="password2">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      minLength="8"
                      maxLength="128"
                      value={password2}
                      onChange={e => setPassword2(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  {message && <Message variant="danger">{message}</Message>}
                  <Button variant="info" type="submit" block className="mt-4">
                    Register
                  </Button>
                </Form>

                <Button
                  type="button"
                  variant="link"
                  className="text-center mt-3"
                  onClick={handleShow}
                >
                  Resend confirmation code
                </Button>
                <Link to="/login" className="text-center btn btn-link">
                  I already have an account
                </Link>
              </Card>
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
        aria-labelledby="Resend Confirmation Code modal"
      >
        <Modal.Header className={'text-center'} closeButton>
          <Modal.Title>Resend Confirmation Code</Modal.Title>
          {message && (
            <p className={'text-danger'} role={'alert'}>
              {message}
            </p>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={resendConfirmationHandler}>
            <Form.Group controlId="confirm-email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type={'submit'} variant={'info'} block className={'m-3'}>
              Send Code
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
