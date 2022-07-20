import LabelledInput from "../LabelledInputs/LabelledInput"

const PropertySection = () =>{
    return (
        <section>
            <LabelledInput inputType="shortText" name="propertyAddress" label="Property address:" />
        </section>
    )
}

export default PropertySection;