// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports

// import NewPassword from './NewPassword';
// import NewPassword from 'src/containers/Auth/NewPassword';

import './style.scss';

// == Composant

const Auth = ({
  inputMailValue,
  onChangeInputMailValue,
  onSubmitMailForm,
  inputPasswordValue,
  onChangeInputPasswordValue,
  message,
}) => {
  const handleOnChangeMail = (event) => {
    onChangeInputMailValue(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    onChangeInputPasswordValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputMailValue && inputPasswordValue) {
      onSubmitMailForm();
    }
  };

  return (
    <div className="login">
      <div className="auth">
        <div className="error">{message}</div>
        <form
          className="auth-form"
          onSubmit={handleOnSubmit}
        >
          <h3 className="auth-form-title">Connexion</h3>
          <div className="auth-form-group">
            <label
              className="auth-form-label"
              htmlFor="email"
            >
              Adresse email
              <input
                className="auth-form-input"
                method="post"
                type="email"
                name="email"
                id="email"
                placeholder="rodolphe.martin@oclock.io"
                value={inputMailValue}
                onChange={handleOnChangeMail}
              />
            </label>
          </div>
          <div className="auth-form-group">
            <label
              className="auth-form-label"
              htmlFor="password"
            >
              Mot de passe
              <input
                className="auth-form-input"
                type="password"
                name="password"
                id="password"
                placeholder="*************"
                value={inputPasswordValue}
                onChange={handleOnChangePassword}
              />
            </label>
          </div>

          <div className="auth-form-group">
            <button
              type="submit"
              className="auth-form-group-button"
            >
              Se connecter
            </button>
          </div>
          <div className="lost-password">
            <a href="#">Mot de passe perdu ?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

// == Props Validation
Auth.propTypes = {
  inputMailValue: PropTypes.string.isRequired,
  onChangeInputMailValue: PropTypes.func.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
  onChangeInputPasswordValue: PropTypes.func.isRequired,
  onSubmitMailForm: PropTypes.func.isRequired,
  message: PropTypes.string,
};

// == Export
export default Auth;
