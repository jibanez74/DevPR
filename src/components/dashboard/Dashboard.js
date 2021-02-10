import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Dashboard({ history }) {
  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  return (
    <section className="dashboard-section">
      <Container>
        <Row>
          <Col md={12}>
            <h1>DashBoard</h1>

            <p>{user.attributes.name}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Dashboard;
