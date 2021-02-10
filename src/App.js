import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './actions/userActions';

import AppBar from './components/layouts/AppBar';
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ConfirmScreen from './components/auth/ConfirmScreen';
import ResetPassword from './components/auth/ResetPassword';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUser());
  });

  return (
    <BrowserRouter>
      <header>
        <AppBar />
      </header>
      <main>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/reset-password/:email" exact component={ResetPassword} />
        <Route exact path="/confirm/:email" component={ConfirmScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
      </main>
    </BrowserRouter>
  );
}

export default App;
