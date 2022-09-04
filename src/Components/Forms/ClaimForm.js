import { addNewClaim, getHealth } from '../../Data/DataFunctions'
import { useReducer, useState } from "react";

const ClaimForm = (props) => {

    const initialNewClaimState = {
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

    const formReducer = (state, data) => {
        return {
            ...state,
            [data.field]: data.value
        };
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);
    const [message, setMessage] = useState("")
    const [saving, setSaving] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        console.log("saving");
        console.log(newClaim);
        const response = addNewClaim(newClaim);
        response.then(
            result => {
                if (result.status === 200) {
                    console.log("new claim added!");
                }
                else {
                    console.log("something went wrong - error code was " + result.status);
                }
            }
        )
            .catch(error => console.log("something went wrong ", error));

    }

    const handleChange = (event) => {        
        const dataToChange = { field: event.target.id, value: event.target.value };
        dispatch(dataToChange);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage("please wait - saving")

        let response;

        console.log(newClaim);
        response = addNewClaim(newClaim);

        response.then(result => {
            if (result.status !== 200) {
                setMessage("something went wrong ", result.statusText)
            }
            setSaving(false);
        }).catch(error => {
            setMessage("something went wrong ", error)
            setSaving(false);
        })
    }

    return (
        <form onSubmit={submit}>
            <section>
                <h3>Personal Details</h3>
                <label htmlFor="firstName">First name: </label>
                <input required type="text" maxLength="30" onChange={handleChange} name="firstName" id="firstName" />
                <br />
                <label htmlFor="middleName">Middle name(s): </label>
                <input required type="text" maxLength="30" onChange={handleChange} name="middleName" id="middleName" />
                <br />
                <label htmlFor="lastName">Last name: </label>
                <input required type="text" maxLength="30" onChange={handleChange} name="lastName" id="lastName" />
                <br />
            </section>
            <section>
                <h3>Claim Details</h3>
                <label htmlFor="policyNumber">Policy number: </label>
                <input required type="text" maxLength="30" onChange={handleChange} name="policyNumber" id="policyNumber" />
                <br />
                <label htmlFor="claimDate">Claim start date: </label>
                <input required type="date" onChange={handleChange} name="claimDate" id="claimDate" />
                <br />
                <label htmlFor="claimAmount">Estimated claim amount: </label>
                <input required type="number" min="0" max="1000000000" step="0.01" onChange={handleChange} name="claimAmount" id="claimAmount" />
                <br />
                <label htmlFor="claimReason">Claim reason (short description): </label>
                <input required type="text" maxLength="30" onChange={handleChange} name="claimReason" id="claimReason" />
                <br />
                <label htmlFor="incidentDescription">Incident Description: </label>
                <textarea required rows="4" cols="50" maxLength="20000" onChange={handleChange} name="incidentDescription" id="incidentDescription"></textarea>
                <br />
            </section>
            <section>
            </section>
            {
                props.formType === "pet" &&
                <section>

                    <label htmlFor="petAnimal">Type of animal: </label>
                    <input required="" type="text" maxLength="30" onChange={handleChange} name="petAnimal" id="petAnimal" />
                    <br />
                    <label htmlFor="petbreed">breed: </label>
                    <input required="" type="text" maxLength="30" onChange={handleChange} name="petbreed" id="petbreed" />
                    <br />

                </section>
            }
            {
                props.formType === "property" &&
                <section>
                    <label htmlFor="propertyAddress">Property address: </label>
                    <input type="text" name="propertyAddress" maxLength="100" required
                        id="propertyAddress" onChange={handleChange} />
                </section>
            }
            {
                props.formType === "vehicle" &&
                <section>
                    <label htmlFor="vehicleMake">Vehicle Make: </label>
                    <input type="text" name="vehicleMake" maxLength="100" required
                        id="vehicleMake" onChange={handleChange} />
                    <br />
                    <label htmlFor="vehicleModel">Vehicle Model: </label>
                    <input type="text" name="vehicleModel" maxLength="100" required
                        id="vehicleModel" onChange={handleChange} />
                    <br />
                    <label htmlFor="vehicleYear">Vehicle year of manufacture: </label>
                    <input required name="vehicleYear" id="vehicleYear" type="number" min="1900"
                        max={new Date().getFullYear()} step="1" value="2000" onChange={handleChange} />
                </section>
            }

            <button type="submit">Save</button>
        </form>
    )
}
export default ClaimForm;