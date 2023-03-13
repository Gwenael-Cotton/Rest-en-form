import { connect } from 'react-redux';
import dashboardCoach from 'src/components/DashboardCoach';

import { getNextBookings } from 'src/actions/nextBookings';
import { getLastBookings } from 'src/actions/lastBookings';

const mapStateToProps = (state) => ({
  nextBookingsArray: state.getAllBookings.nextBookings,
  lastBookingsArray: state.getAllBookings.lastBookings,
});

const mapDispatchToProps = (dispatch) => ({
  getNextBookings: () => {
    const action = getNextBookings();
    dispatch(action);
  },
  getLastBookings: () => {
    const action = getLastBookings();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(dashboardCoach);
