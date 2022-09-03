import LabelledInput from "../LabelledInputs/LabelledInput"

const VehicleSection = () =>{
    return (
        <section>
            <LabelledInput inputType="shortText" name="vehicleMake" label="Vehicle make"/>
            <LabelledInput inputType="shortText" name="vehicleModel" label="Vehicle model" />
            <label htmlFor="vehicleYear">Vehicle year of manufacture: </label> 
            <input required name="vehicleYear" type="number" min="1900" 
                max={new Date().getFullYear()} step="1" value={"vehicleYear"}/>
        </section>
    )
}

export default VehicleSection;