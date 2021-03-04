import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../layouts/PageHeader';
import { classicLogin } from '../../actions/userActions';
import SocialProviders from './SocialProviders';
import {
  Modal,
  Container,
  Col,
  Row,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import Loader from '../layouts/Loader';
import Message from '../layouts/Message';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

function Login({ history }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, user, error } = userLogin;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (user) {
      history.push('/dashboard');
    }
  }, [history, user]);

  const loginHandler = e => {
    e.preventDefault();
    dispatch(classicLogin(email, password));
  };

  const forgotPasswordHandler = async e => {
    e.preventDefault();

    try {
      await Auth.forgotPassword(email);
      history.push(`/reset-password/${email}`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <PageHeader
        msg={'Login using your email and password, or a social provider'}
        title={'Sign In'}
      />
      <section className={'auth-section py-3'}>
        <Container>
          <Row className={'justify-content-center'}>
            <Col md={8} lg={6}>
              <Card body className={'p-4'}>
                <SocialProviders />
                <hr />
                <Form onSubmit={loginHandler}>
                  <Form.Group controlId={'email'}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type={'email'}
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId={'password'}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={'password'}
                      required
                      minLength={'8'}
                      maxLength={'128'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  {error && <Message variant="danger">{error}</Message>}

                  <Button
                    type={'submit'}
                    variant={'info'}
                    block
                    className={'mt-4'}
                  >
                    Sign In
                  </Button>
                </Form>
                <Button
                  type="button"
                  className="mt-3 text-center"
                  variant="link"
                  onClick={handleShow}
                >
                  Forgot password
                </Button>
                <Link className="text-center btn btn-link" to="/register">
                  I don't have an account
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
        aria-labelledby="Forgot password"
      >
        <Modal.Header className={'text-center'} closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
          {message && (
            <p className={'text-danger'} role={'alert'}>
              {message}
            </p>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={forgotPasswordHandler}>
            <Form.Group controlId="forgot-email">
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

export default Login;
