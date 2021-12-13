import Home from "./pages/home/Home";
import SideBar from "./pages/sidebar/SideBar";
import './App.css';
import TopBar from "./components/topar/TopBar";
function App() {
  return (
    <div >
      <TopBar  className='app'/>
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
