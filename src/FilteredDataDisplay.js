import Table from 'react-bootstrap/Table';

function DisplayFilteredData(props){
    const items = props.items;
    const displayFiltered = (item) =>{
        return (
            <tr className='row'>
                <th className='col'>{item["name"]}</th>
                <th className='col'>{item["price"]}</th>
                <th className='col'>{item["type"]}</th>
                <th className='col'>{item["brand"]}</th>
            </tr>
        )
    }

    return (
        <div className="container">
            <h2>Found: {items.length}</h2>
            <Table hover>
                <thead>
                    <tr className='row'>
                        <th className='col'>Name</th>
                        <th className='col'>Price</th>
                        <th className='col'>Type</th>
                        <th className='col'>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(displayFiltered)}
                </tbody>
            </Table>
        </div>
    );
}

export default DisplayFilteredData;