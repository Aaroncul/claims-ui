import Form from "react-bootstrap/Form"

const LongTextInput = () =>
{
    return <Form.Control type="textarea" rows="4" cols="50" maxLength="20000" />
}

export default LongTextInput;