import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from 'src/components/Auth';

import {
  setInputMailValue,
  setInputPasswordValue,
  login,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  inputMailValue: state.auth.email,
  inputPasswordValue: state.auth.password,
  message: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputMailValue: (value) => {
    const action = setInputMailValue(value);
    dispatch(action);
  },
  onChangeInputPasswordValue: (value) => {
    const action = setInputPasswordValue(value);
    dispatch(action);
  },
  onSubmitMailForm: () => {
    const action = login();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default withRouter(container);
