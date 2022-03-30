import {useState} from "react";
import './App.css';
import Table from "./Table";
import {Users} from './user';

function App() {
  const [query, setQuery] = useState("");
  const search = (data) =>{
    return data.filter((item) =>
    item.first_name.toLowerCase().includes(query)||
    item.last_name.toLowerCase().includes(query)||
    item.email.toLowerCase().includes(query)
    );
  }
  console.log(query);
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search"
       onChange={(e)=>setQuery(e.target.value)}  />
      <Table data={search(Users)}></Table>
    </div>
  );
}

export default App;
