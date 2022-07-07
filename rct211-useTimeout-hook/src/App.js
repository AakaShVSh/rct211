import './App.css';
import useTimeout from './components/useTimeout';

function App() {
  const ready1 = useTimeout(3000);
  const ready2 = useTimeout(6000);
  return (
    <div className="App">
     {ready1 === true ? "Ready" : "Not-Ready"}
     <br/>
     {ready2 === true ? "Ready" : "Not-Ready"}
    </div>
  );
}

export default App;
