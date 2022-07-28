import Form from "react-bootstrap/Form"

const MoneyInput = () =>
{
    return <Form.Control type="number" min="0" max="1000000000" step="0.01"/>
}

export default MoneyInput;