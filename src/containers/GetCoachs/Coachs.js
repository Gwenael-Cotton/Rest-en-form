import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Coachs from 'src/components/Coachs';

import { getAllCoachs } from 'src/actions/Coachs';

const mapStateToProps = (state) => ({
  coachs: state.coachs.coachs,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCoachs: () => {
    const action = getAllCoachs();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Coachs);

export default withRouter(container);
