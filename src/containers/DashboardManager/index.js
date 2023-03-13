import { connect } from 'react-redux';
import DashboardManager from 'src/components/DashboardManager';

import { getAllMembers } from 'src/actions/allUsers';
import { getAllCoachs } from 'src/actions/Coachs';
import { onSubmitSlotForm } from 'src/actions/CreateSlotForm';
import {
  getAllSpecialities,
  setInputFirstnameValue,
  setInputLastnameValue,
  setInputMemberRoleValue,
  setInputCoachRoleValue,
  setInputSpecialityValue,
  setInputEmailValue,
  submitUser,
} from 'src/actions/addUserForm';

const mapStateToProps = (state) => ({
  showAllMembers: state.getAllUsers.allMembers,
  showAllCoachs: state.coachs.coachs,
  setInputFirstnameValue: state.addUser.firstname,
  setInputLastnameValue: state.addUser.lastname,
  setInputMemberRoleValue: state.addUser.role,
  setInputCoachRoleValue: state.addUser.role,
  setInputSpecialityValue: state.addUser.specialties,
  setInputEmailValue: state.addUser.email,
  allSpecialities: state.addUser.speciality,
  isChecked: state.addUser.checked,
  successMessageAddUser: state.addUser.successMessageAddUser,
  detailsSuccessAddUser: state.addUser.detailsSuccessAddUser,
  errorMessageAddUser: state.addUser.errorMessageAddUser,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMembers: () => {
    const action = getAllMembers();
    dispatch(action);
  },
  getAllCoachs: () => {
    const action = getAllCoachs();
    dispatch(action);
  },
  getAllSpecialities: () => {
    const action = getAllSpecialities();
    // console.log(action);
    dispatch(action);
  },
  onChangeInputFirstnameValue: (value) => {
    const action = setInputFirstnameValue(value);
    dispatch(action);
  },
  onChangeInputLastnameValue: (value) => {
    const action = setInputLastnameValue(value);
    dispatch(action);
  },
  onChangeInputMailValue: (value) => {
    const action = setInputEmailValue(value);
    dispatch(action);
  },
  onChangeInputMemberRoleValue: (value) => {
    const action = setInputMemberRoleValue(value);
    dispatch(action);
  },
  onChangeInputCoachRoleValue: (value) => {
    const action = setInputCoachRoleValue(value);
    dispatch(action);
  },
  onChangeInputSpecialityValue: (value) => {
    const action = setInputSpecialityValue(value);
    // console.log(action);
    dispatch(action);
  },
  onSubmitUserForm: () => {
    const action = submitUser();
    dispatch(action);
  },
  onSubmitSlotForm: () => {
    const action = onSubmitSlotForm();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardManager);
