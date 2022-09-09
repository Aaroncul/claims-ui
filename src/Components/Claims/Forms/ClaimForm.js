import { addNewClaim, updateClaim } from '../../../data/DataFunctions'
import { Fragment, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";


const ClaimForm = (props) => {

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
    };

    const newClaimReducer = (state, data) => {
        return {
            ...state,
            [data.field]: data.value
        };
    }

    const params = useParams();

    //If there is no ID in the URL, we can assume this is a new claim being created.
    const editMode = params.id != null;

    const claimToEdit = useSelector(state => state.claimToEdit);

    const [newClaim, dispatch] = useReducer(
        newClaimReducer, editMode ? claimToEdit : emptyClaim);

    const handleChange = (event) => {
        const dataToChange = { field: event.target.id, value: event.target.value };
        dispatch(dataToChange);
    }

    const { firstName, middleName, lastName, policyNumber,
        claimDate, claimAmount, claimReason, incidentDescription,
        petAnimal, petbreed, propertyAddress, vehicleMake,
        vehicleModel, vehicleYear, claimStatus,staffNotes } = newClaim;

    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();
        let response;

        if (editMode) {
            let data = {};
            if (firstName !== claimToEdit.firstName) {
                data = { ...data, firstName: firstName };
            };
            if (middleName !== claimToEdit.middleName) {
                data = { ...data, middleName: middleName };
            };
            if (lastName !== claimToEdit.lastName) {
                data = { ...data, lastName: lastName };
            };
            if (policyNumber !== claimToEdit.policyNumber) {
                data = { ...data, policyNumber: policyNumber };
            };
            if (claimDate !== claimToEdit.claimDate) {
                data = { ...data, claimDate: claimDate };
            };
            if (claimAmount !== claimToEdit.claimAmount) {
                data = { ...data, claimAmount: claimAmount };
            };
            if (claimReason !== claimToEdit.claimReason) {
                data = { ...data, claimReason: claimReason };
            };
            if (incidentDescription !== claimToEdit.incidentDescription) {
                data = { ...data, incidentDescription: incidentDescription };
            };
            if (petAnimal !== claimToEdit.petAnimal) {
                data = { ...data, petAnimal: petAnimal };
            };
            if (petbreed !== claimToEdit.petbreed) {
                data = { ...data, petbreed: petbreed };
            };
            if (propertyAddress !== claimToEdit.propertyAddress) {
                data = { ...data, propertyAddress: propertyAddress };
            };
            if (vehicleMake !== claimToEdit.vehicleMake) {
                data = { ...data, vehicleMake: vehicleMake };
            };
            if (vehicleModel !== claimToEdit.vehicleModel) {
                data = { ...data, vehicleModel: vehicleModel };
            };
            if (vehicleYear !== claimToEdit.vehicleYear) {
                data = { ...data, vehicleYear: vehicleYear };
            };
            if (claimStatus !== claimToEdit.claimStatus) {
                data = { ...data, claimStatus: claimStatus };
            };
            if (staffNotes !== claimToEdit.staffNotes) {
                data = { ...data, staffNotes: staffNotes };
            };
            response = updateClaim(user.username, user.password, params.id, data);
        } else {
            response = addNewClaim(user.name, user.password, newClaim);
        }

        response.then(
            result => {
                if (result.status === 200) {
                    navigate("/find/" + result.data.id);                    
                }
                else {
                    console.log("something went wrong - error code was " + result.status);
                }
            }
        ).catch(error => console.log("something went wrong ", error));
    };

    const hasStaffNotes = useSelector(state => state.claimToEdit.staffNotes);

    return (
        <form onSubmit={submit}>
            <section>
                <h3>Personal Details</h3>
                <label htmlFor="firstName">First name: </label>
                <input required type="text" maxLength="30" onChange={handleChange}
                    name="firstName" id="firstName" value={firstName} />
                <br />
                <label htmlFor="middleName">Middle name(s): </label>
                <input type="text" maxLength="30" onChange={handleChange}
                    name="middleName" id="middleName" value={middleName} />
                <br />
                <label htmlFor="lastName">Last name: </label>
                <input required type="text" maxLength="30" onChange={handleChange}
                    name="lastName" id="lastName" value={lastName} />
                <br />
            </section>
            <section>
                <h3>Claim Details</h3>
                <label htmlFor="policyNumber">Policy number: </label>
                <input required type="text" maxLength="30" onChange={handleChange}
                    name="policyNumber" id="policyNumber" value={policyNumber} />
                <br />
                <label htmlFor="claimDate">Claim start date: </label>
                <input required type="date" onChange={handleChange}
                    name="claimDate" id="claimDate" value={claimDate} />
                <br />
                <label htmlFor="claimAmount">Estimated claim amount: </label>
                <input required type="number" min="1" max="1000000000" step="0.01" onChange={handleChange}
                    name="claimAmount" id="claimAmount" value={claimAmount} />
                <br />
                <label htmlFor="claimReason">Claim reason (short description): </label>
                <input required type="text" maxLength="30" onChange={handleChange}
                    name="claimReason" id="claimReason" value={claimReason} />
                <br />
                <label htmlFor="incidentDescription">Incident Description: </label>
                <textarea required rows="4" cols="50" maxLength="20000" onChange={handleChange}
                    name="incidentDescription" id="incidentDescription" value={incidentDescription}></textarea>
                <br />
            </section>
            <section>
            </section>
            {   props.formType === "pet" &&
                <section>
                    <label htmlFor="petAnimal">Type of animal: </label>
                    <input required="" type="text" maxLength="30" onChange={handleChange}
                        name="petAnimal" id="petAnimal" value={petAnimal} />
                    <br />
                    <label htmlFor="petbreed">breed: </label>
                    <input required="" type="text" maxLength="30" onChange={handleChange}
                        name="petbreed" id="petbreed" value={petbreed} />
                    <br />

                </section>
            }
            {   props.formType === "property" &&
                <section>
                    <label htmlFor="propertyAddress">Property address: </label>
                    <input required type="text" maxLength="100" onChange={handleChange}
                        name="propertyAddress" id="propertyAddress" value={propertyAddress} />
                </section>
            }
            {   props.formType === "vehicle" &&
                <section>
                    <label htmlFor="vehicleMake">Vehicle Make: </label>
                    <input type="text" name="vehicleMake" maxLength="100" required
                        id="vehicleMake" onChange={handleChange} value={vehicleMake} />
                    <br />
                    <label htmlFor="vehicleModel">Vehicle Model: </label>
                    <input type="text" name="vehicleModel" maxLength="100" required
                        id="vehicleModel" onChange={handleChange} value={vehicleModel} />
                    <br />
                    <label htmlFor="vehicleYear">Vehicle year of manufacture: </label>
                    <input required name="vehicleYear" id="vehicleYear" type="number" min="1900"
                        max={new Date().getFullYear()} step="1" value={vehicleYear} onChange={handleChange} />
                </section>
            }
            {user.role === "STAFF" && editMode &&
                <Fragment>
                    <br/>
                    <hr/>
                    <h4>Staff Only</h4>
                    <label htmlFor="staffNotes">Staff Notes: </label>
                    <textarea required rows="4" cols="50" maxLength="20000" onChange={handleChange}
                        name="staffNotes" id="staffNotes" value={staffNotes} disabled={hasStaffNotes}
                        ></textarea>
                    <p>Set status:
                        <select name="claimStatus" id="claimStatus" 
                            onChange={handleChange}
                            defaultValue={claimStatus}>
                            <option value="" defaultValue>-- Select Status --</option>
                            <option value="NEW">NEW</option>
                            <option value="INPROGRESS">INPROGRESS</option>
                            <option value="REJECTED">REJECTED</option>
                            <option value="PAID">PAID</option>
                            <option value="TRANSFERRED">TRANSFERRED</option>
                        </select>
                    </p>
                </Fragment>
            }

            <button type="submit">Save</button>
        </form>
    )
}
export default ClaimForm;