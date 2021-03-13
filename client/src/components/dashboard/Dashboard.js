import { Link } from 'react-router-dom';
import Loader from '../layouts/Loader';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthProfile } from '../../actions/profileActions';

function Dashboard() {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  const fetchProfile = useSelector(state => state.fetchProfile);
  const { loading, profile } = fetchProfile;

  useEffect(() => {
    dispatch(getAuthProfile());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <section>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="display-4 text-primary">Dashboard</h1>
              <p className="lead">
                <i className="fas fa-user" /> Welcome {user.attributes.name}
              </p>

              <Link to="/edit-profile">Edit Profile</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Dashboard;
