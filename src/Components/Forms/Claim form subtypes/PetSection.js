import LabelledInput from "../LabelledInputs/LabelledInput"

const PetSection = () =>{
    return (
        <section>
            <LabelledInput inputType="shortText" name="petAnimal" label="Type of animal" value={"petAnimal"}/>
            <LabelledInput inputType="shortText" name="petBreed" label="Breed" value={"petBreed"}/>
        </section>
    )
}

export default PetSection;