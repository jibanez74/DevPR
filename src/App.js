import { BrowserRouter, Route } from 'react-router-dom';

import AppBar from './components/layouts/AppBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ConfirmScreen from './components/auth/ConfirmScreen';
import Landing from './components/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <header>
        <AppBar />
      </header>
      <main>
        <Route exact path="/confirm/:email" component={ConfirmScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
      </main>
    </BrowserRouter>
  );
}

export default App;
