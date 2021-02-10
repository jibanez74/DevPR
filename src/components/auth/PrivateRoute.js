import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../layouts/Loader';

function PrivateRoute({ component: Component, ...rest }) {
  const userLogin = useSelector(state => state.userLogin);
  const { loading, user } = userLogin;

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <Loader />
        ) : user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
