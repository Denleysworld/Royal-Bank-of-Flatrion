import React ,{useState} from "react";


const Filter=({onChange}) =>{
    const [searchTrans, setSearchTrans]=useState('');

    const handleChange= (e)=>{
        setSearchTrans(e.target.value);
        onChange(e.target.value);
    };
    const handleSearch= ()=>{};
    return(
        <div>
            <input 
            type="text" 
            placeholder="Search transaction"
            value={searchTrans} 
            onChange={handleChange}
            />
            <button onClick={handleSearch}>Surf</button>
        </div>
    )


}

export default Filter

