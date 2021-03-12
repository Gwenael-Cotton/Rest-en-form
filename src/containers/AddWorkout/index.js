import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddWorkout from 'src/components/AddWorkout';

import {
  setInputDateValue,
  setInputWeightValue,
  setInputMuscleMassValue,
  setInputFatMassValue,
} from 'src/actions/workouts';

const mapStateToProps = (state) => ({
  inputDateValue: state.addWorkout.date,
  inputWeightValue: state.addWorkout.weight,
  inputMuscleMassValue: state.addWorkout.muscleMass,
  inputFatMassValue: state.addWorkout.fatMass,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputDateValue: (value) => {
    const action = setInputDateValue(value);
    // console.log('action setInputDateValue', action);
    dispatch(action);
  },
  onChangeInputWeightValue: (value) => {
    const action = setInputWeightValue(value);
    // console.log('action setInputWeightValue', action);
    dispatch(action);
  },

  onChangeInputMuscleMassValue: (value) => {
    const action = setInputMuscleMassValue(value);
    // console.log('action setInputMuscleMassValue', action);
    dispatch(action);
  },

  onChangeInputFatMassValue: (value) => {
    const action = setInputFatMassValue(value);
    console.log('action setInputFatMassValue', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(AddWorkout);

export default withRouter(container);
