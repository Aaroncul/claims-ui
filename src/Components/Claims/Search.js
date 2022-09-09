import { useState } from 'react';
import { useNavigate } from 'react-router';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [valid, setValid] = useState(false);
    const [touched, setTouched] = useState(false);

    const navigate = useNavigate();

    const doSearch = (event) => {
        event.preventDefault();     
        console.log(searchTerm)  
        if (searchTerm != null) {
            navigate("/view/" + searchTerm.trim());    
        }
    }
    
    const handleChange = (event) => {
        const value = event.target.value;
        setTouched(true);
        setSearchTerm(value);
        setValid (value.trim().length > 0);
    }

    return <div className="searchBox">
        <form onSubmit={doSearch}>
            <label htmlFor="claimId"  >Order Id:</label>
            <input onChange={handleChange} value={searchTerm} id="claimId" type="text" />
            <button type="submit" disabled={!valid} >Search</button>
            {touched && !valid && <p style={{color: "#f00", "fontSize": "12px", "marginTop": 0}}>Please enter a valid order id</p>}
        </form>
    </div>

}

export default Search;