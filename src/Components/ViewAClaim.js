import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getClaim } from "../data/DataFunctions";

const ViewClaim = () => {

    const emptyClaim = { orderId: "", date : new Date().toISOString().slice(0,10) , country: "",
        amount : "", currency: "", taxCode : "", taxRate : "", type : ""}

    const [Claim, setClaim] = useState(emptyClaim);
    const user = useSelector(state => state.user);

    const navigate = useNavigate();

    const params = useParams();
    useEffect( () => {
    getClaim(user.username, user.password, params.id)
        .then( response => {
            if (response.status === 200) {
                setClaim(response.data);
            }
            else {
                console.log("Something went wrong ", response.status);
            }
        } )
        .catch( error => console.log("error occurred", error)) ;
    }, [] );

    const dispatch = useDispatch();

    const edit = () => {
        dispatch({type: "set-Claim-to-edit", value : Claim});
        navigate("/edit/" + params.id);
    }
    
    return (
        <Fragment>
            <h2>View Claim {Claim.id} </h2>
            <table className="ClaimsTable" >
                <tbody>
                    <tr><th>Order Id</th><td>{Claim.id}</td></tr>
                    <tr><th>Date</th><td>{Claim.lastName}</td></tr>
                </tbody>
            </table>
            {user.role === "MANAGER" && <button onClick={edit}>edit</button> }
        </Fragment>
    );
}

export default ViewClaim;