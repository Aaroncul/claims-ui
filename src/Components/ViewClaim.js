import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getClaim } from "../data/DataFunctions";

const ViewClaim = () => {

    const emptyClaim = { firstName: "",
        middleName: "",
        lastName: "",
        policyNumber: "",
        claimDate: new Date().toISOString().slice(0, 10),
        claimAmount: 0,
        claimReason: "",
        incidentDescription: "",
        petAnimal: "",
        petbreed: "",
        propertyAddress: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleYear: ""}

    const [claim, setClaim] = useState(emptyClaim);
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
        dispatch({type: "set-claim-to-edit", value : claim});
        navigate("/edit/" + params.id);
    }
    
    return (
        <Fragment>
            <h2>View Claim {claim.id} </h2>
            <table className="ClaimsTable" >
                <tbody>
                    <tr><th>Id</th><td>{claim.id}</td></tr>
                    <tr><th>Date</th><td>{claim.claimDate}</td></tr>
                    <tr><th>Name</th><td>{claim.lastName}</td></tr>
                    <tr><th>Amount</th><td>{claim.claimAmount}</td></tr>
                </tbody>
            </table>
            {user.role === "STAFF" && <button onClick={edit}>edit</button> }
        </Fragment>
    );
}

export default ViewClaim;