import LabelledInput from "../LabelledInputs/LabelledInput"

const PropertySection = () =>{
    return (
        <section>
            <h3>Property Details</h3>
            <LabelledInput inputType="shortText" name="propertyAddress" label="Property address:" />
        </section>
    )
}

export default PropertySection;