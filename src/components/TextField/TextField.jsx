import React from 'react';
import FieldWrap from '../FieldWrap/FieldWrap';

import './TextField.sass';

const TextField = ({ label, name, placeholder, fieldId, value, onChange, isValid }) => {
    const [showValidError, setShowValidError] = React.useState(false);

    const onInputField = (text) => {
        onChange(text);
        if (text !== '') {
            setShowValidError(true);
        } else {
            setShowValidError(false);
        }
    };

    return (
        <FieldWrap fieldId={fieldId} label={label}>
            <input
                type="text"
                className="r-field__input"
                placeholder={placeholder}
                id={fieldId}
                name={name}
                value={value}
                onChange={(e) => onInputField(e.target.value)}
                autoComplete="off"
            />
            {!isValid && showValidError && (
                <span className="r-field__error">Введено не корректное значение</span>
            )}
        </FieldWrap>
    );
};

export default TextField;
