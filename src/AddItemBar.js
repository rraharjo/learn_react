import {useState} from "react";

function ItemBar(props){
    const [name, setName] = useState("");
    const [maxPrice, setMaxPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const onButtonPressed = () => {
        props.addItem({
            name:name,
            price: maxPrice,
            type: type,
            brand: brand,
        });
        setName("");
        setMaxPrice(0);
        setType("");
        setBrand("");
    }

    return(
        <div>
            <h2>Add Item</h2>
            <form>
                <label>Name: </label>
                <input 
                id="name-field" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <br></br>

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

                <button type="button" onClick={onButtonPressed}>Add</button>
            </form>
        </div>
    );
}

export default ItemBar;