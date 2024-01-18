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
  const updateFilters = (filter) => {//filter is an obj {} --> name, price, type, brand
    const items = data["items"];
    let FilteredItems = [];
    console.log(filter);
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
