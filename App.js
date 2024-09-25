import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Slider from './Sleder';
import axios from 'axios'

async function getTarifs() {
  const r = await axios.get('http://localhost:5000/api/tarif/all');
  console.log(r)
  return r
}

getTarifs()


function App() {

  



  
  return (
    <div className="App">
      <Button className='app-button'>D</Button>
      <Slider></Slider>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <Button className='app-button'>D</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
