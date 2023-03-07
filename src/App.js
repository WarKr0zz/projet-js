import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import ToDoList from './ToDoList';
import StreamingSite from './steaming';
import CV from './CV';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Definition des routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/CV_Enzo" element={<CV />} />
        <Route path="/streaming" element={<StreamingSite />} />
      </Routes>
    </Router>
  );
}

export default App;
