import { useState } from 'react';
import './App.css';
import SearchBar from "./SearchBar.js";
import ItemBar from "./AddItemBar.js";
import DisplayData from './DataDisplayAll.js';
import DisplayFilteredData from './FilteredDataDisplay.js';
import styled from "styled-components";

const Title = styled.h1
`color: ${(props) => (props.color ? props.color : "green")};
font-style: "italic"`;
function App() {
  const [filter, setFilters] = useState([]);
  const [data, setData] = useState({number: 0, items: []})
  //item props: name, price -> num, type, brand

  const updateFilters = (name) => {
    const items = data["items"];
    let FilteredItems = [];
    for (let x = 0 ; x < items.length ; x++){
      if (items[x].name === name){
        FilteredItems.push(items[x]);
      }
    }
    setFilters(FilteredItems);
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
    <div className='container'>
      <div className='row mt-3'>
        <Title>Inventory</Title>
      </div>
      <div className='row mt-3'>
        <SearchBar filter = {updateFilters}/>
      </div>
      <div className='row mt-3'>
        <DisplayFilteredData items = {filter}/>
      </div>
      <div className='row mt-3'>
        <ItemBar addItem = {addData}/>
      </div>
      <div className='row mt-3'>
        <DisplayData item = {data["items"]}/>
      </div>  
    </div>
  );
}



export default App;
