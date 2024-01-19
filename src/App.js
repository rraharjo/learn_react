import { useState } from 'react';
import './App.css';
import SearchBar from "./SearchBar.js";
import ItemBar from "./AddItemBar.js";
import DisplayFilteredData from './FilteredDataDisplay.js';
import styled from "styled-components";

const Title = styled.h1
`color: ${(props) => (props.color ? props.color : "green")};
font-style: "italic"`;

function App() {
  const [filter, setFilters] = useState([]);
  const [data, setData] = useState({items: []});
  const [filterDisplay, setFilterDisplay] = useState([]);
  //item props: name, price -> num, type, brand
  const updateFilters = (filter) => {//filter is an obj {} --> name, price, type, brand
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((datas) => setData({items: datas}));
    const items = data["items"];
    let FilteredItems = [];
    for (let x = 0 ; x < items.length ; x++){
      if (filter.name !== '' && filter.name !== items[x].name){
        continue;
      }
      if (filter.price !== '' && filter.price !== items[x].price){
        continue;
      }
      if (filter.type !== '' && filter.type !== items[x].type){
        continue;
      }
      if (filter.brand !== '' && filter.brand !== items[x].brand){
        continue;
      }
      FilteredItems.push(items[x]);
    }
    setFilters(FilteredItems);
  };
  const addData = (item) => {
    let tempItems = data["items"];
    item.id = tempItems.length + "";
    console.log(tempItems);
    const jsonItem = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }
    
    fetch("http://localhost:3000/items", jsonItem)
    .then((response) => response.json());
  }

  const updateFilterDisplay = (filters) =>{
    updateFilters(filters);
    setFilterDisplay(filter);
  }

  const deleteItem = (filters) => {
    updateFilters(filters);
    console.log(filter);
    for (let x = 0 ; x < filter.length ; x++){
      const id = filter[x].id;
      fetch('http://localhost:3000/items/' + id, {method: "DELETE"})
      //.then((response) => console.log(response));
    }

  }
  return (
    <div className='container'>
      <div className='row mt-3'>
        <Title color='blue'>Inventory</Title>
      </div>
      <div className='row mt-3'>
        <SearchBar disp = {updateFilterDisplay} delete = {deleteItem}/>
      </div>
      <div className='row mt-3'>
        <DisplayFilteredData items = {filterDisplay}/>
      </div>
      <div className='row mt-3'>
        <ItemBar addItem = {addData}/>
      </div>
      <div className='row mt-3'>

      </div>
    </div>
  );
}



export default App;
