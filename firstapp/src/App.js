import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <h3>Game 1 how many times the user ask for:</h3>
      <Counter range={5}/>
      <h3> Game 2: user turn to flip a coin</h3>
      <Counter range={20}/>
      <h3> Game 3: Magic Ball</h3>
      <Counter range={35}/>
    </div>
  );
}

export default App;
