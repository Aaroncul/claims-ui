import PetSection from "./Claim form subtypes/PetSection";
import PropertySection from "./Claim form subtypes/PropertySection";
import VehicleSection from "./Claim form subtypes/VehicleSection";
import LabelledInput from "./LabelledInputs/LabelledInput"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const ClaimForm = (props) => {
    console.log(props.formType)
    return (
        <Container>
        <Form>
            <section>
                <h3>Personal Details</h3>
                <LabelledInput inputType="shortText" name="firstName" label="First name" />
                <LabelledInput inputType="shortText" name="middleName" label="Middle name(s)" />
                <LabelledInput inputType="shortText" name="lastName" label="Last name" />
            </section>
            <hr/>
            <section>
                <h3>Claim Details</h3>
                <LabelledInput inputType="shortText" name="policyNumber" label="Policy number" enabled="false" />
                <LabelledInput inputType="date" name="claimDate" label="Claim start date" enabled="false" />
                <LabelledInput inputType="money" name="claimAmount" label="Estimated claim amount" />
                <LabelledInput inputType="shortText" name="claimReason" label="Claim reason (short description)" />
                <LabelledInput inputType="longText" name="incidentDescription" label="Incident Description" />
            </section>
            <hr/>
            {
                {
                    'pet': <PetSection />,
                    'property': <PropertySection />,
                    'vehicle': <VehicleSection />
                }[props.formType]
            }
            <br/>
            <Button action="submit" method="POST">Submit</Button>
        </Form>        
        </Container>
    )
}

export default ClaimForm;