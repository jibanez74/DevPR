import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Route exact path="/register" component={RegisterPage} />
      </main>
    </BrowserRouter>
  );
}

export default App;
