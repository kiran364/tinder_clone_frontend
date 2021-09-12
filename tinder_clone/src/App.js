import './components/Header';
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header/>
        <Header/>
        <TinderCards/>
        <SwipeButtons/>
      </header>
    </div>
  );
}

export default App;
