import React from 'react';

import './Check.sass';

const Check = ({ fieldId, required, children, onClick }) => {
    const [isCheck, setIsCheck] = React.useState(false);

    const handlerClick = () => {
        setIsCheck(!isCheck);
        onClick(!isCheck);
    };

    return (
        <div className="r-field-check">
            <input
                type="checkbox"
                className="r-field-check__input"
                id={fieldId}
                required={required}
            />
            <label htmlFor={fieldId} className="r-field-check__label" onClick={handlerClick}>
                {children}
            </label>
        </div>
    );
};

export default Check;
