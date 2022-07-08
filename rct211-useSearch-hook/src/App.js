import { useState } from 'react';
import './App.css';
import useSearch from './hook/useSearch';
var cities = require("../node_modules/country-json/src/country-by-capital-city.json")

function App() {
  const [filters,setfilter] = useState("");
  const show = useSearch({cities,filters})
  return (
    <div className="App">
    <input onChange={(e) => setfilter(e.target.value)} type="search" placeholder="search country by capital"  />              
    <div style={{border:"1px solid white",width:"12%",margin:"auto"}}>
    {show}
    </div>
    </div>
  );
}

export default App;
