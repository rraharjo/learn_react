import { useEffect, useState } from 'react';
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
  const [newItem, setNewItem] = useState(false);
  //item props: name, price -> num, type, brand

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((items) => setData({items: items}))
    .then(() => console.log("mounted"));
  }, [newItem]);

  const getFilters = (filter) => {//filter is an obj {} --> name, price, type, brand
    let items = data["items"];
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
    return FilteredItems;
  };

  const addData = (item) => {
    const jsonItem = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }
    fetch("http://localhost:3000/items", jsonItem)
    .then(() => setNewItem(!newItem));
  }

  const updateFilters = (filters) =>{
    const promise = new Promise((resolve, reject) => {
      resolve(getFilters(filters));
    });

    promise.then((items) => setFilters(items));
  }

  const deleteItem = (filters) => {
    const promise = new Promise((resolve, reject) => {
      resolve(getFilters(filters));
    })
    const endpoint = "http://localhost:3000/items/";
    const request = {
      method: "DELETE"
    }
    const deleteItems = (items) => {
      for (let index = 0 ; index < items.length ; index++){
        fetch(endpoint + items[index].id, request)
        .then(() => setNewItem(!newItem));
      }
      return "done";
    }
    promise
    .then((items) => deleteItems(items));
  }
  return (
    <div className='container'>
      <div className='row mt-3'>
        <Title color='blue'>Inventory</Title>
      </div>
      <div className='row mt-3'>
        <SearchBar disp = {updateFilters} delete = {deleteItem}/>
      </div>
      <div className='row mt-3'>
        <DisplayFilteredData items = {filter}/>
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
