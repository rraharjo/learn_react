import {useState} from "react";

function SearchBar(props){
    const [name, setName] = useState("");
    const [dispName, setDispName] = useState("NaN");
    const [dispPrice, setDispPrice] = useState(0);
    const [dispType, setDispType] = useState("NaN");
    const [dispBrand, setDispBrand] = useState("NaN");

    const onButtonPressed = () => {
        const items = props.data["items"];
        let found = false;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (element.name === name){
                setDispName(element.name);
                setDispPrice(element.price);
                setDispBrand(element.brand);
                setDispType(element.type);
                found = true;
                break;
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
        <div>
            <h2>Search an Item</h2>
            <form>
                <label>Name: </label>
                <input 
                id="name-field" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <br></br>

                

                <button type="button" onClick={onButtonPressed}>Search</button>
            </form>
            <table border="1">
                <thead> 
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td>Type</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dispName}</td>
                        <td>{dispPrice}</td>
                        <td>{dispBrand}</td>
                        <td>{dispType}</td>
                    </tr>
                </tbody>
            </table>
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