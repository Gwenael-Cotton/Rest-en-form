import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddWorkout from 'src/components/AddWorkout';

import {
  setInputDateValue,
  setInputWeightValue,
  setInputMuscleMassValue,
  setInputFatMassValue,
  setInputBoneMassValue,
  setInputBodyWaterValue,
  setInputContentValue,
} from 'src/actions/workouts';

const mapStateToProps = (state) => ({
  inputDateValue: state.addWorkout.date,
  inputWeightValue: state.addWorkout.weight,
  inputMuscleMassValue: state.addWorkout.muscleMass,
  inputFatMassValue: state.addWorkout.fatMass,
  inputBoneMassValue: state.addWorkout.boneMass,
  inputBodyWaterValue: state.addWorkout.bodyWater,
  inputContentValue: state.addWorkout.content,
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
    // console.log('action setInputFatMassValue', action);
    dispatch(action);
  },

  onChangeInputBoneMassValue: (value) => {
    const action = setInputBoneMassValue(value);
    // console.log('action setInputBoneMassValue', action);
    dispatch(action);
  },

  onChangeInputBodyWaterValue: (value) => {
    const action = setInputBodyWaterValue(value);
    // console.log('action setInputBodyWaterValue', action);
    dispatch(action);
  },

  onChangeInputContentValue: (value) => {
    const action = setInputContentValue(value);
    // console.log('action setInputContentValue', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(AddWorkout);

export default withRouter(container);
