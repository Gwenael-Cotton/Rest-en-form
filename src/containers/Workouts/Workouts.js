import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Workouts from 'src/components/Workouts';
import { getWorkouts } from 'src/actions/workouts';

const mapStateToProps = (state) => ({
  workouts: state.workouts.workouts,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => {
    const action = getWorkouts();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Workouts);

export default withRouter(container);
