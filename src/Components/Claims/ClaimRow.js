import { Link } from "react-router-dom";
import {useNavigate} from 'react-router';

const ClaimRow = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/view/${props.id}`);
    }

    
    return <tr id={props.id} >
                <td>{props.id}</td>
                <td>{props.date}</td>
                <td>{props.name}</td>
                <td>{props.amount}</td>
                <td>{props.status}</td>
                <td><button onClick={handleClick}>view</button></td>
            </tr>

}

export default ClaimRow;