import React from 'react';

import './Modal.sass';

const Modal = () => {
    return (
        <div className="modal">
            <p className="modal__title">Регистрация</p>
            <p>
                Уже есть аккаунт?
                <a href="#" className="login">
                    Войти
                </a>
            </p>
        </div>
    );
};

export default Modal;
