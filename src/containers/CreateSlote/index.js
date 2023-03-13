import { connect } from 'react-redux';
import CreateSlot from 'src/components/DashboardManager/CreateSlot';

import {
  setInputSlotDateValue,
  setInputStartValue,
  setInputEndValue,
  setInputCoachValue,
  onSubmitSlotForm,
} from 'src/actions/CreateSlotForm';

import { getAllCoachs } from 'src/actions/Coachs';

const mapStateToProps = (state) => ({
  selectedDate: state.createSlot.selectedDate,
  selectedStart: state.createSlot.selectedStart,
  selectedEnd: state.createSlot.selectedEnd,
  coachsList: state.coachs.coachs,
  setInputSlotDateValue,
  setInputCoachValue,
  successMessageAddSlot: state.createSlot.successMessageAddSlot,
  errorMessageAddSlot: state.createSlot.errorMessageAddSlot,

});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputStartValue: (start) => {
    const action = setInputStartValue(start);
    // console.log(action);
    dispatch(action);
  },
  onChangeInputEndValue: (end) => {
    const action = setInputEndValue(end);
    // console.log(action);
    dispatch(action);
  },
  onChangeInputCoachValue: (value) => {
    const action = setInputCoachValue(value);
    // console.log(action);
    dispatch(action);
  },
  onChangeInputSlotDateValue: (date) => {
    const action = setInputSlotDateValue(date);
    // console.log(action);
    dispatch(action);
  },
  getAllCoachs: () => {
    const action = getAllCoachs();
    // console.log(action);
    dispatch(action);
  },
  onSubmitSlotForm: () => {
    const action = onSubmitSlotForm();
    // console.log(action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSlot);
