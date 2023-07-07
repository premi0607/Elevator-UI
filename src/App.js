import './App.css';
import Transactions from './Components/Transaction/Transactions';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Nav from './NavBar/Nav';
import Home from './Home/Home';
import ApexChart from './Components/Usage/Usage'
import LiftConfig from './Components/LiftConfig/LiftConfig';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
        {/* <h1>Elevator</h1> */}
        <DataProvider>
           <Nav/> 
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/transactions' element={<Transactions/>}/>
              <Route path='/config' element={<LiftConfig/>}/>
              <Route path='/usage' element={<ApexChart/>}/>
          </Routes> 
         
        </DataProvider>
    </div>
  );
}

export default App;
