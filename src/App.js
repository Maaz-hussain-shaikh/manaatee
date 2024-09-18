import './App.css';
import Dashboard from './Component/Dashboard';
import Form from './Component/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<Form />} />
      <Route path="/Dash" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;



