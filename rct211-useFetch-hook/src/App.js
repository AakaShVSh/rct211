import './App.css';
import useFetch from './hook/useFetch';

function App() {
  const {data,loading,error} = useFetch("https://reqres.in/api/users?page=2")
  console.log(data)
  
  if(loading){
    return (
      <div><h2>Loading...</h2></div>
    )
  }
  
  if(error){
    return (
      <div><h1>Error Occured</h1></div>
    )
  }

  return (
    <div className="App">
     {data.map((e) => (
      <div key={e.id}>
        <img alt='' src={e.avatar} placeholder="img"/>
        <h3>{e.first_name} {e.last_name}</h3>
        <h4>{e.email}</h4>
      </div>
     ))}
    </div>
  );
}

export default App;
