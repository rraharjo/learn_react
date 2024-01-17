
function DisplayData(props){
    const items = props["item"];
    const showItem = (item) => {
        return(
            <tr>
                <th>{item["id"]}</th>
                <th>{item["name"]}</th>
                <th>{item["price"]}</th>
                <th>{item["type"]}</th>
                <th>{item["brand"]}</th>
            </tr>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <h2>List of Items</h2>
            </div>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                        <th scope="col">Brand</th>
                    </tr>
                </thead>
                {items.map(showItem)}
            </table>
        </div>
    );
}

export default DisplayData;