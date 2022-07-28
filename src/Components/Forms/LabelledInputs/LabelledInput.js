import Form from "react-bootstrap/Form"
import DateInput from "./Subtypes/DateInput";
import LongTextInput from "./Subtypes/LongTextInput";
import MoneyInput from "./Subtypes/MoneyInput";
import ShortTextInput from "./Subtypes/ShortTextInput";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const LabelledInput = (props) => {
    return (
        <Form.Group className="mb-1">
            <Row>
                <Col>
                    <Form.Label htmlFor={props.name}>{props.label}: </Form.Label>
                </Col>
                <Col>
                    {
                        {
                            'date': <DateInput name={props.name} id={props.name} />,
                            'money': <MoneyInput name={props.name} id={props.name} />,
                            'shortText': <ShortTextInput name={props.name} id={props.name} />,
                            'longText': <LongTextInput name={props.name} id={props.name} />

                        }[props.inputType]
                    }
                </Col>
            </Row>            
        </Form.Group>
    )
}

export default LabelledInput;