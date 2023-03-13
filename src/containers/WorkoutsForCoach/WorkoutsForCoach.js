import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import WorkoutsForCoach from 'src/components/WorkoutsForCoach/WorkoutsForCoach';
import { getWorkoutsForCoach } from 'src/actions/workouts';

const mapStateToProps = (state, ownProps) => {
  const { ownPropsMemberId } = ownProps.match.params.id;
  return ({
    workoutsForCoach: state.workouts.workoutsForCoach,
    itemMemberId: state.workouts.workoutsForCoach.ownPropsMemberId,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getWorkoutsForCoach: () => {
    const action = getWorkoutsForCoach(ownProps.match.params.id);
    // console.log('getWorkoutsForCoach', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(WorkoutsForCoach);

export default withRouter(container);
