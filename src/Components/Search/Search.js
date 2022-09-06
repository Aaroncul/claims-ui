import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import './Search.css';

const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [valid, setValid] = useState(false);
    const [touched, setTouched] = useState(false);

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const doSearch = (event) => {
        event.preventDefault();
        props.setSearchTerm(searchTerm.trim());
        if (searchParams.get("claim") != null) {
            navigate("/find/" + searchTerm.trim() + "?id=" + searchParams.get("claim"));    
        } else {    
            navigate("/find/" + searchTerm.trim());
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
            <label htmlFor="orderId"  >Order Id:</label>
            <input onChange={handleChange} value={searchTerm} id="orderId" type="text" />
            <button type="submit" disabled={!valid} >Search</button>
            {touched && !valid && <p style={{color: "#f00", "fontSize": "12px", "marginTop": 0}}>Please enter a valid order id</p>}
        </form>
    </div>

}

export default Search;