import Home from "./pages/home/Home";
import SideBar from "./pages/sidebar/SideBar";
import './App.css';
import TopBar from "./components/topar/TopBar";
import {Route,Routes} from 'react-router-dom'
import User from "./pages/user/User";
function App() {
  return (
    <div >
       <TopBar  className='app'/>
      <Routes>
     
        <Route path="user" element={<User/>} />
       
      </Routes>
     
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
