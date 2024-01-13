import { useState } from 'react';
import './App.css';
import SearchBar from "./SearchBar.js";
import ItemBar from "./AddItemBar.js";
import DisplayData from './DataDisplay.js';


/*function InpTest(){
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  function UpdateText(param){
    setText(param);
  }

  const UpdateText = (param) => {
    setText(param);
  }

  return(
    <div>
      <input type='text' id="myFInp" onChange={(e) => UpdateText(e.target.value)}/>
      <button onClick={() => setMsg(text)}>show</button>
      <h2>{msg}</h2>
    </div>
  )
}*/

function App() {
  const [filter, setFilters] = useState({});
  const [data, setData] = useState({number: 0, items: []})
  //item props: name, price -> numgit, type, brand

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addData = (item) => {
    let tempItems = data["items"];
    let tempNumber = data["number"] + 1;
    item.id = tempItems.length;
    tempItems.push(item);
    setData({number: tempNumber, items: tempItems});
    console.log(data);
  }
  return (
    <div className='App'>
      <SearchBar updateState = {updateFilters}/>
      <ItemBar addItem = {addData}/>
      <DisplayData data = {data}/>
    </div>
  );
}



export default App;
