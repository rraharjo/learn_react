import {useState} from "react";

function SearchBar(props){
    const [name, setName] = useState("");
    const [dispName, setDispName] = useState(name);
    const [dispPrice, setDispPrice] = useState(0);
    const [dispType, setDispType] = useState("NaN");
    const [dispBrand, setDispBrand] = useState("NaN");

    const onButtonPressed = () => {
        const items = props.data["items"];//is an array
        let found = false;
        for (let index = 0; index < items.length && !found; index++) {
            const element = items[index];
            if (element.name === name){
                setDispName(element.name);
                setDispPrice(element.price);
                setDispBrand(element.brand);
                setDispType(element.type);
                found = true;
            }   
        }
        if(!found){
                setDispName(name);
                setDispPrice(-1);
                setDispBrand("NaN");
                setDispType("NaN");
        }
        props.updateState({
            name: name,
        });
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
                <button type="button" className="col-2 btn btn-primary" onClick={onButtonPressed}>Search</button>
            </div>
            
            <div className="row">
                <div className="col">
                    <p className=''>Name: {dispName}</p>
                </div>
                <div className="col">
                    <p className=''>price: {dispPrice}</p>
                    </div>
                <div className="col">
                    <p className=''>type: {dispType}</p>
                    </div>
                <div className="col">
                    <p className=''>brand: {dispBrand}</p>
                </div>
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