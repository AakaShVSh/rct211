import './App.css';
import useTimer from './hook/useTimer';

function App() {
  const {time,start,pause,restart} = useTimer()
  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default App;
