import logo from './logo.svg';
import './App.css';
import Button2 from './button2.js'
import Profile from './profile.js';
import Deneme from './deneme.js';
import EditProfile from './deneme2.js';
import Input from './input.js';

function App() {
  return (
    <div className="App">
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
        <hr />
        <button className="button1">Yollaaaa</button>
        <hr />
        <Button2 />
        <hr />
        <Profile title={sayi2}/>
        <Deneme />
        <br />
        {/*}<EditProfile />{*/}
        <br />
        <Input />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </header>
    </div>
  );
}

let sayi2 = 'Yallaa yallllaaa';

export default App;
