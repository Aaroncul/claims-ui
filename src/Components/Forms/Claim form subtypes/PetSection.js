import LabelledInput from "../LabelledInputs/LabelledInput"

const PetSection = () =>{
    return (
        <section>
            <h3>Pet Details</h3>
            <LabelledInput inputType="shortText" name="petType" label="Type of animal"/>
            <LabelledInput inputType="shortText" name="petBreed" label="Breed" />
        </section>
    )
}

export default PetSection;