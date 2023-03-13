import { connect } from 'react-redux';
import Members from 'src/components/Members';

import { getAllMembers } from 'src/actions/allUsers';

const mapStateToProps = (state) => ({
  allMembers: state.getAllUsers.allMembers,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMembers: () => {
    const action = getAllMembers();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
