import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { onClickLogout } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  isLogged: state.auth.login.logged,
  role: state.auth.login.role,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => {
    const action = onClickLogout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
