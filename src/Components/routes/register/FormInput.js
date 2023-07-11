import { useState } from 'react';
import './formInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMsg, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <div className="signup_fromInput">
            <label className='signup_label'>{label}</label>
            <input
                {...inputProps}
                className='imput_label'
                onChange={onChange}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                onBlur={handleFocus}
                required="required"
                focused={focused.toString()}
            />
            <span className='signup_span'>{errorMsg}</span>
        </div>
    )
}

export default FormInput;