
import './App.css';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <div className="App">
        <Login />
        <Dashboard />
      </div> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

    </DndProvider>

  );
}

export default App;
