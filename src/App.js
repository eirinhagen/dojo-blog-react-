
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const me = {
    'person': 'kisa',
    'age': 25
  };
  const welcome = "welcome to my blog";
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home />
      </div>

    </div>
  );
}

export default App;
