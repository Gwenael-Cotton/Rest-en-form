import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from 'src/components/App';

import { appInit } from 'src/actions/init';

const mapStateToProps = (state) => ({
  isLogged: state.auth.login.logged,
  role: state.auth.login.role,
  isNewUser: state.addUser.isNewUser,
});

const mapDispatchToProps = (dispatch) => ({
  appInit: () => {
    const action = appInit();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(container);
