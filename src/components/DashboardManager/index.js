import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateSlot from 'src/containers/CreateSlote';

import './styles.scss';

const DashboardManager = ({
  setInputFirstnameValue,
  onChangeInputFirstnameValue,
  onSubmitUserForm,
  setInputLastnameValue,
  onChangeInputLastnameValue,
  onChangeInputMemberRoleValue,
  onChangeInputCoachRoleValue,
  onChangeInputSpecialityValue,
  onChangeInputMailValue,
  setInputMemberRoleValue,
  setInputCoachRoleValue,
  setInputSpecialityValue,
  setInputEmailValue,
  showAllMembers,
  showAllCoachs,
  getAllMembers,
  getAllCoachs,
  getAllSpecialities,
  allSpecialities,
  isChecked,
  successMessageAddUser,
  detailsSuccessAddUser,
  errorMessageAddUser,
}) => {
  const handleOnChangeFirstname = (event) => {
    onChangeInputFirstnameValue(event.target.value);
  };
  const handleOnChangeLastname = (event) => {
    onChangeInputLastnameValue(event.target.value);
  };
  const handleOnChangeMail = (event) => {
    onChangeInputMailValue(event.target.value);
  };
  const handleOnChangeMemberRole = (event) => {
    onChangeInputMemberRoleValue(event.target.value);
  };
  const handleOnChangeCoachRole = (event) => {
    onChangeInputCoachRoleValue(event.target.value);
  };
  const handleOnChangeSpeciality = (event) => {
    onChangeInputSpecialityValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitUserForm();
  };

  useEffect(getAllCoachs, []);
  useEffect(getAllMembers, []);
  useEffect(getAllSpecialities, []);

  return (
    <div className="manager">
      <div className="manager-content-left">
        <div className="manager-content-left-box">
          <div className="manager-show-members">
            <div className="manager-show-members-box">
              <Link to="/members" className="manager-show-members-link">{showAllMembers.length} Adhérents</Link>
            </div>
            <div className="manager-show-members-box">
              <Link to="/coachs" className="manager-show-members-link">{showAllCoachs.length} Coachs</Link>
            </div>
          </div>
          <div className="manager-add-user">
            <form
              className="manager-add-user-form"
              onSubmit={handleOnSubmit}
              action="post"
              method="post"
            >
              <h1 className="manager-add-user-title">Ajouter un utilisateur</h1>
              <div className="manager-add-user-box">
                <div className="manager-add-user-checkroles">
                  <div>
                    <span className="manager-add-user-checkroles-title">Adhérent</span>
                    <input
                      // checked={!isChecked}
                      className="manager-add-user-checkroles-input"
                      type="radio"
                      name="radio"
                      id="checkbox-member"
                      value={setInputMemberRoleValue}
                      onChange={handleOnChangeMemberRole}
                    />
                  </div>
                  <div>
                    <span className="manager-add-user-checkroles-title">Coach</span>
                    <input
                      // checked={!isChecked}
                      className="manager-add-user-checkroles-input"
                      type="radio"
                      name="radio"
                      id="checkbox-coach"
                      value={setInputCoachRoleValue}
                      onChange={handleOnChangeCoachRole}
                    />
                  </div>
                </div>
              </div>
              <div className="manager-add-user-form-names">
                <label className="manager-add-user-form-names-infos" htmlFor="text">
                  Prénom
                  <input
                    className="manager-add-user-form-names-input"
                    method="post"
                    type="text"
                    name="text"
                    id="firstname"
                    placeholder="Rodolphe"
                    value={setInputFirstnameValue}
                    onChange={handleOnChangeFirstname}
                  />
                </label>
                <label className="manager-add-user-form-names-infos" htmlFor="text">
                  Nom
                  <input
                    className="manager-add-user-form-names-input"
                    method="post"
                    type="text"
                    name="text"
                    id="lastname"
                    placeholder="Martin"
                    value={setInputLastnameValue}
                    onChange={handleOnChangeLastname}
                  />
                </label>
                <label className="manager-add-user-form-names-infos" htmlFor="text">
                  Email
                  <input
                    className="manager-add-user-form-names-input"
                    method="post"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="roro.m@gmail.com"
                    value={setInputEmailValue}
                    onChange={handleOnChangeMail}
                  />
                </label>
              </div>
              <div className="manager-add-user-speciality">
                {setInputCoachRoleValue === 'COACH' && (
                <h3 className="manager-add-user-speciality-title">Spécialités</h3>
                )}
                {setInputCoachRoleValue === 'COACH' && (
                <div className="manager-add-user-speciality-container">
                  {
                allSpecialities.map((specialityObject) => (
                  <label className="manager-add-user-speciality-item" htmlFor="checkbox" key={specialityObject.id}>
                    <input
                      type="checkbox"
                      name={specialityObject.name}
                      id={specialityObject.id}
                      value={specialityObject.id}
                      onChange={handleOnChangeSpeciality}
                    />
                    {specialityObject.name}
                  </label>
                ))
              }
                </div>
                )}
                <button type="submit" className="manager-add-user-submit">Valider</button>
                {successMessageAddUser && (
                <div className="success-adduser">
                  <p className="success-adduser-text">{successMessageAddUser} : {detailsSuccessAddUser.firstname} {detailsSuccessAddUser.lastname}</p>
                  <p className="success-adduser-text"> rôle : {detailsSuccessAddUser.role}</p>
                </div>
                )}
                {errorMessageAddUser && (
                <div className="error">
                  <p className="error__text">{errorMessageAddUser}</p>
                </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="manager-content-right">
        <CreateSlot />
      </div>
    </div>
  );
};

DashboardManager.defaultProps = {
  setInputFirstnameValue: '',
  setInputLastnameValue: '',
  setInputMemberRoleValue: '',
  setInputCoachRoleValue: '',
  setInputSpecialityValue: '',
  setInputMailValue: '',
  successMessageAddUser: null,
  detailsSuccessAddUser: null,
  errorMessageAddUser: null,
};

DashboardManager.propTypes = {
  allSpecialities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  setInputFirstnameValue: PropTypes.string,
  setInputLastnameValue: PropTypes.string,
  setInputMemberRoleValue: PropTypes.string,
  setInputCoachRoleValue: PropTypes.string,
  setInputSpecialityValue: PropTypes.array,
  setInputMailValue: PropTypes.string,
  onChangeInputFirstnameValue: PropTypes.func.isRequired,
  onSubmitUserForm: PropTypes.func.isRequired,
  onChangeInputLastnameValue: PropTypes.func.isRequired,
  onChangeInputMemberRoleValue: PropTypes.func.isRequired,
  onChangeInputCoachRoleValue: PropTypes.func.isRequired,
  onChangeInputSpecialityValue: PropTypes.func.isRequired,
  onChangeInputMailValue: PropTypes.func.isRequired,
  showAllMembers: PropTypes.array.isRequired,
  showAllCoachs: PropTypes.array.isRequired,
  getAllMembers: PropTypes.func.isRequired,
  getAllCoachs: PropTypes.func.isRequired,
  getAllSpecialities: PropTypes.func.isRequired,
  successMessageAddUser: PropTypes.string,
  detailsSuccessAddUser: PropTypes.shape({
    id: PropTypes.number,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  errorMessageAddUser: PropTypes.string,
};

export default DashboardManager;
