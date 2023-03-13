// == Import npm
import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Imports
import './style2.scss';

// == Composant
const NewPassword = ({
  inputNewPasswordValue,
  inputConfirmPasswordValue,
  onChangeInputNewPasswordValue,
  onChangeInputConfirmPasswordValue,
  onSubmitNewPasswordForm,
  successMessageSaveNewUser,
  errorMessageSaveNewUser,
}) => {
  const token = useLocation();

  const handleOnChangeNewPassword = (event) => {
    onChangeInputNewPasswordValue(event.target.value);
  };

  const handleOnChangeConfirmPassword = (event) => {
    onChangeInputConfirmPasswordValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputNewPasswordValue === inputConfirmPasswordValue) {
      onSubmitNewPasswordForm(token);
    }
    else {
      alert('Les deux mots de passe doivent être identiques');
    }
  };

  return (
    <div className="password">
      <div className="new-password">
        {successMessageSaveNewUser && (
        <div className="success">
          <p className="success-text">{successMessageSaveNewUser}</p>
        </div>
        )}
        {errorMessageSaveNewUser && (
          <div className="error">
            <p className="error-text">{errorMessageSaveNewUser}</p>
          </div>
          )}
        <form
          className="new-password-form"
          onSubmit={handleOnSubmit}
          value={token}
        >
          <h3 className="new-password-form-title">Créer un mot de passe</h3>
          <div className="new-password-form-group">
            <label
              className="new-password-form-label"
              htmlFor="newPassword"
            >
              Nouveau mot de passe
              <input
                className="new-password-form-input"
                type="password"
                name="newPassword"
                id="newPassword"
                value={inputNewPasswordValue}
                onChange={handleOnChangeNewPassword}
              />
            </label>
          </div>
          <div className="new-password-form-group">
            <label
              className="new-password-form-label"
              htmlFor="confirmPassword"
            >
              Confirmation du nouveau mot de passe
              <input
                className="new-password-form-input"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={inputConfirmPasswordValue}
                onChange={handleOnChangeConfirmPassword}
              />
            </label>
          </div>
          {/*
        {inputNewPasswordValue !== inputConfirmPasswordValue && (
          <div className="error">
            <p className="error__text">Les deux mots de passe doivent être identiques</p>
          </div>
        )}
        */}
          <div className="new-password-form-group">
            <button
              className="new-password-form-group-button"
              type="submit"
            >
              Valider
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

// == Props Validation

NewPassword.propTypes = {
  inputNewPasswordValue: PropTypes.string.isRequired,
  inputConfirmPasswordValue: PropTypes.string.isRequired,
  onChangeInputNewPasswordValue: PropTypes.func.isRequired,
  onChangeInputConfirmPasswordValue: PropTypes.func.isRequired,
  onSubmitNewPasswordForm: PropTypes.func.isRequired,
  successMessageSaveNewUser: PropTypes.string.isRequired,
  errorMessageSaveNewUser: PropTypes.string.isRequired,
};

// == Export
export default NewPassword;
