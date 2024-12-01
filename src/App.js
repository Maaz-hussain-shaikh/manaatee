import './App.css';
import Dashboard from './Component/Dashboard';
import Analytics from './Component/Dashboard/Analytics';
import Userlist from './Component/Dashboard/Userlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Opform from './Component/Dashboard/Opform'
import Operatorslist from './Component/Dashboard/User/Operatorslist';
import ProfessionalTitle from './Component/Dashboard/User/ProfessionalTitle';
import Modrator from './Component/Dashboard/User/Modrator';
import Userpost from './Component/Dashboard/Post/Userpost'
import Userprofile from './Component/Dashboard/Post/Userprofile';
import CoinHistory from './Component/Dashboard/Post/CoinHistory';
import EditProfile from './Component/Dashboard/Post/EditProfile';
import Specializationlist from './Component/Dashboard/User/Specializationlist';
import AllPrimaryConcerns from './Component/Dashboard/User/AllPrimaryConcerns';
import UserDetails from './Component/Dashboard/User/UserDetails';
import OperatorDetails from './Component/Dashboard/User/Operatordetails';
import Moderatordetails from './Component/Dashboard/User/Moderatordetails';
import { ToastContainer } from 'react-toastify';
function App() {
  return (<>
  <Router>
    <Routes>
    <Route element={<Dashboard />}>
          <Route path="/" element={<Analytics />}/>
          <Route path="/users" element={<Userlist />}/>
          <Route path="/userdetails/:userid" element={<UserDetails />} />
          <Route path="/operatordetails/:operatorid" element={<OperatorDetails />} />
          <Route path="/moderatordetails/:moderatorid" element={<Moderatordetails/>} />
          <Route path="/Operatorlist" element={<Operatorslist/>} />
          <Route path="/users" element={<Userlist/>}/>
          <Route path="/Moderatorlist" element={<Modrator/>} />
          <Route path="/Opform" element={<Opform/>} />
          <Route path="/ProfessionalTitle" element={<ProfessionalTitle/>} />
          <Route path="/Profile" element={<Userprofile/>} />
          <Route path="/Profile/CoinHistory" element={<CoinHistory/>} />
          <Route path='/Profile/EditProfile' element={<EditProfile/>}/>
          <Route path='Mcderator/Profiles' element={ <Userpost/>}/>
          <Route path='/specializationlist' element={<Specializationlist/>}/>
          <Route path='/all_primary_concerns' element={<AllPrimaryConcerns/>}/>
          
        </Route>
    </Routes>
  </Router>
  <ToastContainer />
  </>
    
  
  );
}

export default App;



