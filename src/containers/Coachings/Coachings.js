import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Coachings from 'src/components/Coachings';

import { getCoachings } from 'src/actions/coachings';

const mapStateToProps = (state) => ({
  coachings: state.coachings.coachings,
});

const mapDispatchToProps = (dispatch) => ({
  getCoachings: () => {
    const action = getCoachings();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Coachings);

export default withRouter(container);
