import {useState} from "react";

function ItemBar(props){
    const [name, setName] = useState("");
    const [maxPrice, setMaxPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [msg, setMsg] = useState("")

    const onButtonPressed = () => {
        props.addItem({
            name: name,
            price: maxPrice,
            type: type,
            brand: brand,
        });
        setMsg(name + " added");
        setName("");
        setMaxPrice(0);
        setType("");
        setBrand("");
    }

    return(
        <div className="container">
            <div className="row">
                <h2>Add Item</h2>
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
                    <label>Maximum Price: </label>
                    <input 
                    className="form-control"
                    id="max-price-field" 
                    type="number" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(e.target.value)}/>
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
                <button type="button" className="btn btn-secondary col-2" onClick={onButtonPressed}>Add</button>   
            </div>
            <div className="row mt-3">
                <h4>{msg}</h4>
            </div>
        </div>
    );
}

export default ItemBar;