import LabelledInput from "../LabelledInputs/LabelledInput"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const VehicleSection = () =>{
    return (
        <section>
            <h3>Vehicle Details</h3>
            <LabelledInput inputType="shortText" name="vehicleMake" label="Vehicle make"/>
            <LabelledInput inputType="shortText" name="vehicleModel" label="Vehicle model" />
            <Row>
                <Col>
                <Form.Label htmlFor="vehicleYear">Vehicle year of manufacture: </Form.Label> 
                </Col>
                <Col>
                <Form.Control required name="vehicleYear" type="number" min="1900" max={new Date().getFullYear()} step="1" />
                </Col>
            </Row>
        </section>
    )
}

export default VehicleSection;