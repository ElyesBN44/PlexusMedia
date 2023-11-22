
import Register from './components/register/Register'
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from './components/privateroute/PrivateRoute';
import Register2 from './components/register/Register2';
function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element = {<Register2/>}/>
      <Route path='/login' element = {<Login/>}/>
    <Route path='/app/privateRoute' element = {<PrivateRoute/>}/> 
     </Routes>


    </div>
  );
}

export default App;
