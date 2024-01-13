import { useState } from 'react';
import './App.css';
import SearchBar from "./SearchBar.js";
import ItemBar from "./AddItemBar.js";
import DisplayData from './DataDisplay.js';

function App() {
  const [filter, setFilters] = useState({});
  const [data, setData] = useState({number: 0, items: []})
  //item props: name, price -> num, type, brand

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addData = (item) => {
    let tempItems = data["items"];
    let tempNumber = data["number"] + 1;
    item.id = tempItems.length;
    tempItems.push(item);
    setData({number: tempNumber, items: tempItems});
    //console.log(data);
  }
  return (
    <div className='App'>
      <SearchBar updateState = {updateFilters} data = {data}/>
      <ItemBar addItem = {addData}/>
      <DisplayData item = {data["items"]}/>
    </div>
  );
}



export default App;
