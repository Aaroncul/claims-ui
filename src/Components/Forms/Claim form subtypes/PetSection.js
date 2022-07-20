import LabelledInput from "../LabelledInputs/LabelledInput"

const PetSection = () =>{
    return (
        <section>
            <LabelledInput inputType="shortText" name="petType" label="Type of animal"/>
            <LabelledInput inputType="shortText" name="petBreed" label="Breed" />
        </section>
    )
}

export default PetSection;