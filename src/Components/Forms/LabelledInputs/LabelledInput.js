import { Fragment } from "react"
import DateInput from "./Subtypes/DateInput";
import LongTextInput from "./Subtypes/LongTextInput";
import MoneyInput from "./Subtypes/MoneyInput";
import ShortTextInput from "./Subtypes/ShortTextInput";

const LabelledInput = (props) => {
    console.log(props.name)
    return (
        <Fragment>
            <label htmlFor={props.name}>{props.label}: </label>
            {
                {
                    'date': <DateInput name={props.name} id={props.name} />,
                    'money': <MoneyInput name={props.name} id={props.name} />,
                    'shortText': <ShortTextInput name={props.name} id={props.name} />,
                    'longText': <LongTextInput name={props.name} id={props.name} />

                }[props.inputType]
            }
            <br />
        </Fragment>
    )
}

export default LabelledInput;