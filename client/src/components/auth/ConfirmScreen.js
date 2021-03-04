import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Message from '../layouts/Message';
import Loader from '../layouts/Loader';
import PageHeader from '../layouts/PageHeader';

function ConfirmScreen({ history, match }) {
  const [code, setCode] = useState('');
  const email = match.params.email;
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const confirmHandler = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await Auth.confirmSignUp(email, code);
      history.push('/login');
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  return(
      <>
        {loading && <Loader />}
        <PageHeader title={"Confirm"} msg={"Enter your confirmation code"} />
    <section className={"auth-section py-3"}>
      <Container>
        <Row className={"justify-content-center"}>
          <Col md={4}>
            <Card body className={"p-4"}>
              {message && <Message variant={"danger"}>{message}</Message>}
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
              <Button type="submit" variant="info" block className={"m-3"}>
                Submit
              </Button>
            </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
        </>
  )
}

export default ConfirmScreen;

