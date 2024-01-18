import {useState} from "react";

function SearchBar(props){
    const [name, setName] = useState("");

    const returnFilter = () =>{
        props.filter(name);
    }
    
    return(
        <div className="container">
            <div className="row">
                <h2>Search an Item</h2>
            </div>
            <div className="row">
                <label>Name: </label>
                <input 
                className="form-control"
                id="name-field" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="row mt-3">
                <div className="col-5"></div>
                <button type="button" className="col-2 btn btn-primary" onClick={returnFilter}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;

/*
<label>Maximum Price: </label>
                <input 
                id="max-price-field" 
                type="number" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(e.target.value)}/>
                <br></br>

                <label>Type: </label>
                <input 
                id="type-field" 
                type="text" 
                value={type} 
                onChange={(e) => setType(e.target.value)}/>
                <br></br>

                <label>Brand: </label>
                <input 
                id="brand-field" 
                type="text" 
                value={brand} 
                onChange={(e) => setBrand(e.target.value)}/>
                <br></br>
*/