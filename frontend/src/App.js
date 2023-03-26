import { Route,Routes } from 'react-router-dom';
import './App.css';
import AlertError from './components/AlertError';
import Edit_profile from './components/Edit_profile';
import Login_reg from './components/Login_reg';
import Offer from './components/Offer';
import Profile_emp from './components/Profile_emp';
import Training_int from './components/Training_int';

function App() {
  return (
    <div className="App">
      <AlertError/>
      <Routes>
        <Route path='/' element={<Login_reg/>}/>
        <Route path='/profile' element={<Profile_emp/>} />
        <Route path='/edit' element={<Edit_profile />} />
        <Route path='/test' element={<Training_int />} />
        <Route path='/offers' element={<Offer/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
