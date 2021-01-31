import React from 'react';

import './FieldWrap.sass';

const FieldWrap = ({ fieldId, label, children }) => {
    return (
        <div className="r-field">
            <label htmlFor={fieldId} className="r-field__label">
                {label}
            </label>
            {children}
        </div>
    );
};

export default FieldWrap;
