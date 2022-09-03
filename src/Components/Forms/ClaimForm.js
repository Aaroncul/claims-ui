import PetSection from "./Claim form subtypes/PetSection";
import PropertySection from "./Claim form subtypes/PropertySection";
import VehicleSection from "./Claim form subtypes/VehicleSection";
import LabelledInput from "./LabelledInputs/LabelledInput"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { addNewClaim } from '../../Data/DataFunctions'
import { useReducer, useState } from "react";

const ClaimForm = (props) => {

    const initialNewClaimState = {
        firstName: "",
        middleName: "",
        lastName: "",
        policyNumber: "",
        claimDate: new Date().toISOString().slice(0, 10),
        claimAmount: "0",
        claimReason: "",
        incidentDescription: "USD",
        petAnimal: "",
        petBreed: "",
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
        /* event.preventDefault();
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
            .catch(error => console.log("something went wrong ", error)); */

            
    }


    const handleChange = (event, myDispatch) => {
        const dataToChange = { field: event.target.id, value: event.target.value };
        myDispatch(dataToChange);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage("please wait - saving")
    
        let response;
        
        console.log(newClaim);s
        response = addNewClaim(newClaim);                   
    
        response.then ( result => {
            if (result.status === 200) {
            }
            else {
                setMessage ("something went wrong ", result.statusText)
            }
            setSaving(false);
        })
            .catch (error => {
                setMessage("something went wrong ", error)
                setSaving(false);
            })
        }

    console.log(props.formType)
    return (
        <form onSubmit={submitForm}>
            <section>
                <h3>Personal Details</h3>
                <LabelledInput inputType="shortText" name="firstName" label="First name" />
                <LabelledInput inputType="shortText" name="middleName" label="Middle name(s)" />
                <LabelledInput inputType="shortText" name="lastName" label="Last name" />
            </section>
            <section>
                <h3>Claim Details</h3>
                <LabelledInput inputType="shortText" name="policyNumber" label="Policy number" enabled="false" onChange={handleChange} />
                <LabelledInput inputType="date" name="claimDate" label="Claim start date" enabled="false" onChange={handleChange} />
                <LabelledInput inputType="money" name="claimAmount" label="Estimated claim amount" onChange={handleChange} />
                <LabelledInput inputType="shortText" name="claimReason" label="Claim reason (short description)" onChange={handleChange} />
                <LabelledInput inputType="longText" name="incidentDescription" label="Incident Description" onChange={handleChange} />
            </section>
            {
                {
                    'pet': <PetSection />,
                    'property': <PropertySection />,
                    'vehicle': <VehicleSection />
                }[props.formType]
            }
             <button disabled={saving} type="submit">Save</button>
        </form>
    )    
}
export default ClaimForm;