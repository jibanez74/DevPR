import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Message from '../layouts/Message';
import Loader from '../layouts/Loader';
import PageHeader from '../layouts/PageHeader';

function ResetPassword({ history, match }) {
  const [code, setCode] = useState('');
  const email = match.params.email;
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const confirmHandler = async e => {
    e.preventDefault();
    setLoading(true);

    if (password !== password2) {
      setMessage('Passwords do not match');
      setLoading(false);
    } else {
      try {
        await Auth.forgotPasswordSubmit(email, code, password);
        history.push('/login');
      } catch (error) {
        setMessage(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      <PageHeader
        title={'Reset Password'}
        msg="Enter the code that was email to you and a new password"
      />
      <section className={'auth-section py-3'}>
        <Container>
          <Row className={'justify-content-center'}>
            <Col md={4}>
              <Card body className={'p-4'}>
                <Form onSubmit={confirmHandler}>
                  <Form.Group controlId="code">
                    <Form.Label>Confirmation code</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      required
                      maxLength="20"
                      value={code}
                      onChange={e => setCode(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>New password</Form.Label>
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
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      minLength="8"
                      maxLength="128"
                      onChange={e => setPassword2(e.target.value)}
                      value={password2}
                    ></Form.Control>
                  </Form.Group>
                  {message && <Message variant={'danger'}>{message}</Message>}

                  <Button type="submit" variant="info" block className={'m-3'}>
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ResetPassword;
