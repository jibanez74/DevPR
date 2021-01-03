import { BrowserRouter, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <header>
        <AppBar />
      </header>
      <main>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={LandingPage} />
      </main>
    </BrowserRouter>
  );
}

export default App;
