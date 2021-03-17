import { connect } from 'react-redux';

import NewPassword from 'src/components/Auth/NewPassword';

import {
  setInputNewPasswordValue,
  setInputConfirmNewPasswordValue,
  addConfirmNewPassword,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  inputNewPasswordValue: state.auth.createPassword.password,
  inputConfirmPasswordValue: state.auth.createPassword.confirm,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputNewPasswordValue: (value) => {
    const action = setInputNewPasswordValue(value);
    // console.log('setInputNewPasswordValue', action);
    dispatch(action);
  },

  onChangeInputConfirmPasswordValue: (value) => {
    const action = setInputConfirmNewPasswordValue(value);
    console.log('setInputConfirmNewPasswordValue', action);
    dispatch(action);
  },

  onSubmitNewPasswordForm: () => {
    // const action = addConfirmNewPassword();
    // dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
