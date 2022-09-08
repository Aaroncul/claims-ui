import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getClaim } from "../data/DataFunctions";

const ViewClaim = () => {

    const emptyClaim = {
        firstName: "",
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
        vehicleYear: ""
    }

    const [claim, setClaim] = useState(emptyClaim);
    const user = useSelector(state => state.user);

    const navigate = useNavigate();

    const params = useParams();
    useEffect(() => {
        getClaim(user.username, user.password, params.id)
            .then(response => {
                if (response.status === 200) {
                    setClaim(response.data);
                }
                else {
                    console.log("Something went wrong ", response.status);
                }
            })
            .catch(error => console.log("error occurred", error));
    }, []);

    const dispatch = useDispatch();

    const edit = () => {
        dispatch({ type: "set-claim-to-edit", value: claim });
        navigate("/edit/" + params.id);
    }

    return (
        <Fragment>
            <h2>View Claim {claim.id} </h2>
            <table className="claimsTable">
                <tbody>
                    <tr><th>Id</th><td>{claim.id}</td></tr>
                    <tr><th>Date</th><td>{claim.claimDate}</td></tr>
                    <tr><th>Name</th><td>{claim.firstName + " " + claim.middleName + " " + claim.lastName}</td></tr>
                    <tr><th>policyNumber</th><td>{claim.policyNumber}</td></tr>
                    <tr><th>claimDate</th><td>{claim.claimDate}</td></tr>
                    <tr><th>claimReason</th><td>{claim.claimReason}</td></tr>
                    <tr><th>Amount</th><td>{claim.claimAmount}</td></tr>
                    <tr><th>incidentDescription</th><td>{claim.incidentDescription}</td></tr>
                    {claim.petAnimal !== "" &&
                        <Fragment>
                            <tr><th>Animal</th><td>{claim.petAnimal}</td></tr>
                            <tr><th>Breed</th><td>{claim.petBreed}</td></tr>
                        </Fragment>
                    }
                    {
                        claim.propertyAddress !== "" &&
                        <tr><th>Address</th><td>{claim.propertyAddress}</td></tr>
                    }
                    {
                        claim.vehicleMake !== "" &&
                        <Fragment>
                            <tr><th>Make</th><td>{claim.vehicleMake}</td></tr>
                            <tr><th>Model</th><td>{claim.vehicleModel}</td></tr>
                            <tr><th>Year</th><td>{claim.vehicleYear}</td></tr>
                        </Fragment>
                    }
                    <tr><th>Status</th><td>{claim.claimStatus}</td></tr>
                    <tr><th>Staff Notes</th><td>{claim.staffNotes}</td></tr>
                </tbody>
            </table>
            {user.role === "STAFF" && <button onClick={edit}>Edit</button>}
            <button onClick={() => navigate(-1)}>Go back</button>
        </Fragment>
    );
}

export default ViewClaim;