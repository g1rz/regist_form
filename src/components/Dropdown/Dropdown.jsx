import React from 'react';
import FieldWrap from '../FieldWrap/FieldWrap';

import './Dropdown.sass';

const Dropdown = ({ fieldId, name, label, placeholder, list, onClick }) => {
    const [isShowList, setIsShowList] = React.useState(false);

    const [chooseValue, setChooseValue] = React.useState('');

    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideclick);

        return () => document.body.removeEventListener('click', handleOutsideclick);
    }, []);

    const toggleVisibleList = () => {
        setIsShowList(!isShowList);
    };

    const onClickItem = (e) => {
        setChooseValue(e.target.innerText);
        setIsShowList(false);
        onClick(e.target.innerText);
    };

    const handleOutsideclick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(dropdownRef.current)) {
            setIsShowList(false);
        }
    };

    let placeholderClass = 'r-dropdown__placeholder';
    if (isShowList) placeholderClass += ' r-dropdown__placeholder--active';
    if (chooseValue === '') placeholderClass += ' r-dropdown__placeholder--empty';

    let placeHolderText = chooseValue === '' ? placeholder : chooseValue;

    let dropdownList = list.map((item) => (
        <li className="r-dropdown-list__item" onClick={onClickItem} key={item.id}>
            {item.name}
        </li>
    ));

    return (
        <FieldWrap fieldId={fieldId} label={label}>
            <input type="hidden" name={name} id={fieldId} value={chooseValue} />

            <div className="r-dropdown" ref={dropdownRef}>
                <div className={placeholderClass} onClick={toggleVisibleList}>
                    {placeHolderText}
                </div>

                {isShowList && <ul className="r-dropdown-list">{dropdownList}</ul>}
            </div>
        </FieldWrap>
    );
};

export default Dropdown;
