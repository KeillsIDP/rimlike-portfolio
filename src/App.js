import logo from './logo.svg';
import './App.css';
import {Base} from './components/Base/Base.js'
import Cover from './components/Cover/Cover.js'

function App() {
  return (
    <div className="App">
      <Cover/>
      <Base/>
      <h6 className="copyright">Made by Keills 2023</h6>
    </div>
  );
}

export default App;
