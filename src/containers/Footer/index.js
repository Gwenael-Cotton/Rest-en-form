import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from 'src/components/Footer';

const mapStateToProps = (state) => ({
  isLogged: state.auth.login.logged,
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default withRouter(container);
