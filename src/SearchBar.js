import {useState} from "react";

function SearchBar(props){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const returnFilter = () =>{
        props.filter({name, price, type, brand});
    }

    return(
        <div className="container">
            <div className="row">
                <h2>Search an Item</h2>
            </div>
            <div className="row">
                <div className="col">
                    <label>Name: </label>
                    <input 
                    className="form-control"
                    id="name-field" 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="col">
                    <label>price: </label>
                    <input 
                    className="form-control"
                    id="price-field" 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="col">
                    <label>Type: </label>
                    <input 
                    className="form-control"
                    id="type-field" 
                    type="text" 
                    value={type} 
                    onChange={(e) => setType(e.target.value)}/>
                </div>
                <div className="col">
                    <label>Brand: </label>
                    <input 
                    className="form-control"
                    id="brand-field" 
                    type="text" 
                    value={brand} 
                    onChange={(e) => setBrand(e.target.value)}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-5"></div>
                <button type="button" className="col-2 btn btn-primary" onClick={returnFilter}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;