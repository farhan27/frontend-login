import logo from './logo.svg';
import './App.css';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Login/>
      <Dashboard/>
    </div>
  );
}

export default App;
