import PetSection from "./Claim form subtypes/PetSection";
import PropertySection from "./Claim form subtypes/PropertySection";
import VehicleSection from "./Claim form subtypes/VehicleSection";
import LabelledInput from "./LabelledInputs/LabelledInput"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {addNewClaim} from '../../Data/DataFunctions'
import {useReducer, useState} from "react";

const ClaimForm = (props) => {

    const initialNewClaimState = {
        firstName : "", 
        middleName : "",
        lastName : "",
        policyNumber : "",
        claimDate : new Date().toISOString().slice(0, 10), 
        amount : "0",
        claimReason : "", 
        incidentDescription : "USD", 
        petAnimal : "", 
        petBreed : "", 
        propertyAddress : "",
        vehicleMake:"",
        vehicleModel:"",
        vehicleYear:""};

    const formReducer = (state, data) => {
        return {
            ...state,
            [data.field]: data.value
        };
    }

    const [newClaim, dispatch] = useReducer(formReducer , initialNewClaimState);

    console.log(props.formType)
    return (
        <div>
            <section>
                <h3>Personal Details</h3>
                <LabelledInput inputType="shortText" name="firstName" label="First name" />
                <LabelledInput inputType="shortText" name="middleName" label="Middle name(s)" />
                <LabelledInput inputType="shortText" name="lastName" label="Last name" />
            </section>
            <section>
                <h3>Claim Details</h3>
                <LabelledInput inputType="shortText" name="policyNumber" label="Policy number" enabled="false" />
                <LabelledInput inputType="date" name="claimDate" label="Claim start date" enabled="false" />
                <LabelledInput inputType="money" name="claimAmount" label="Estimated claim amount" />
                <LabelledInput inputType="shortText" name="claimReason" label="Claim reason (short description)" />
                <LabelledInput inputType="longText" name="incidentDescription" label="Incident Description" />
            </section>
            {
                {
                    'pet':<PetSection />,
                    'property':<PropertySection />,
                    'vehicle':<VehicleSection/>
                }[props.formType]
            }
        </div>
    )

    const submit = (event) =>
    {
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
                    console.log("something went wrong - error code was " + result.status );
                }
            }
        )
        .catch(error => console.log("something went wrong ", error));
    }
}

export default ClaimForm;