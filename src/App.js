
import './App.css';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Login />
        <Dashboard />
      </div>

    </DndProvider>

  );
}

export default App;
