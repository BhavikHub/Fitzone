import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Workout from './Components/Workout';
import Trainer from './Components/Trainer';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer position='bottom-center' />
      <Navbar/>
      <Home />
      <Workout />
      <About/>
      <Trainer />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
