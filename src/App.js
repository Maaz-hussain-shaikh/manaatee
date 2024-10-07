import './App.css';
import Dashboard from './Component/Dashboard';
import Analytics from './Component/Dashboard/Analytics';
import Userlist from './Component/Dashboard/Userlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Opform from './Component/Dashboard/Opform'
import Opratorlist from './Component/Dashboard/User/Opratorlist';
import Consultcategory from './Component/Dashboard/User/Consultcategory';
import Modrator from './Component/Dashboard/User/Modrator';


function App() {
  return (
    <Router>
    <Routes>
    <Route element={<Dashboard />}>
          <Route path="/" element={<Analytics />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/Opform" element={<Opform/>} />
          <Route path="/User/Opratorlist" element={<Opratorlist/>} />
          <Route path="/User/Consultcategory" element={<Consultcategory/>} />
          <Route path="/User/Modrator" element={<Modrator/>} />

        </Route>
    </Routes>
  </Router>
  );
}

export default App;



