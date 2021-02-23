import { useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../actions/profileActions';
import Loader from '../layouts/Loader';
import { Link } from 'react-router-dom';

function Dashboard({ history }) {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  const fetchProfile = useSelector(state => state.fetchProfile);
  const { loading, profile } = fetchProfile;

  useEffect(() => {
    dispatch(getProfile(user.attributes.sub));
  }, [dispatch, user]);

  return loading ? (
    <Loader />
  ) : !loading && !profile ? (
    <>
      <p>No profile</p>
      <Link to="/edit-profile">edit profile</Link>
    </>
  ) : (
    <>
      <h1>{user.attributes.name}</h1>
      <Link to="/edit-profile">
        Edit Profile
      </Link>
    </>
  );
}

export default Dashboard;
