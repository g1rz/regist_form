import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import TextField from '../TextField/TextField';

import './RegistrForm.sass';

const RegistrForm = () => {
    const [userName, setUserName] = React.useState('');
    const [validName, setValidName] = React.useState(false);

    const [userEmail, setUserEmail] = React.useState('');
    const [validEmail, setValidEmail] = React.useState(false);

    const [userPhone, setUserPhone] = React.useState('');
    const [validPhone, setValidPhone] = React.useState(false);

    const [userLang, setUserLang] = React.useState('');

    const inputName = (text) => {
        setUserName(text);
        if (text.search(/[^A-Za-z_-]/g) === -1) {
            setValidName(true);
        } else {
            setValidName(false);
        }
    };

    const inputEmail = (text) => {
        setUserEmail(text);
        if (text.search(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) !== -1) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    const inputPhone = (text) => {
        setUserPhone(text);
        if (
            text.search(/^(\+7|7|8)+\(?([0-9]){3}\)?-?[0-9]{3}-?([0-9]{4}|[0-9]{2}-?[0-9]{2})$/) !==
            -1
        ) {
            setValidPhone(true);
        } else {
            setValidPhone(false);
        }
    };

    const inputLang = (text) => {
        setUserLang(text);
    };

    const languages = [
        {
            id: 'ru',
            name: 'Русский',
        },
        {
            id: 'eng',
            name: 'Английский',
        },
        {
            id: 'cn',
            name: 'Китайский',
        },
        {
            id: 'sp',
            name: 'Испанский',
        },
    ];

    return (
        <form className="r-form">
            <TextField
                label="Имя"
                name="username"
                placeholder="Введите Ваше имя"
                fieldId="user_name"
                value={userName}
                onChange={inputName}
                isValid={validName}
            />
            <TextField
                label="Email"
                name="username"
                placeholder="Введите ваш email"
                fieldId="user_email"
                value={userEmail}
                onChange={inputEmail}
                isValid={validEmail}
            />
            <TextField
                label="Номер телефона"
                name="userphone"
                placeholder="Введите номер телефона"
                fieldId="user_phone"
                value={userPhone}
                onChange={inputPhone}
                isValid={validPhone}
            />
            <Dropdown
                label="Язык"
                name="userlang"
                placeholder="Язык"
                fieldId="user_lang"
                list={languages}
                onClick={inputLang}
            />
        </form>
    );
};

export default RegistrForm;
