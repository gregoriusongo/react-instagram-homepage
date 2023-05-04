import './App.css';
import Sidenav from './components/SideNav';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <div className="homepage">
        <div className="homepage__navWraper">
          <Sidenav />
        </div>
        <div className="homepage__timeline">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;
