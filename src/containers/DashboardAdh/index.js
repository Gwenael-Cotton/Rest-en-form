import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getHealthCheck } from 'src/actions/healthCheck';

import DashboardAdh from 'src/components/DashboardAdh';

const mapStateToProps = (state) => ({
  healthCheck: state.healthCheck.healthCheck,
});

const mapDispatchToProps = (dispatch) => ({
  getHealthCheck: () => {
    const action = getHealthCheck();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(DashboardAdh);

export default withRouter(container);
