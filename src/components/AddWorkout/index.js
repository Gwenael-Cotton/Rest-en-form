// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// == Imports
import './style.scss';

// date fns
import fr from 'date-fns/locale/fr';
import formatWithOptions from 'date-fns/fp/formatWithOptions';

// date fns
registerLocale('fr', fr);

// == Composant
const AddWorkout = ({
  inputDateValue,
  onChangeInputDateValue,
  inputWeightValue,
  onChangeInputWeightValue,
  inputMuscleMassValue,
  onChangeInputMuscleMassValue,
  inputFatMassValue,
  onChangeInputFatMassValue,
  inputBoneMassValue,
  onChangeInputBoneMassValue,
  inputBodyWaterValue,
  onChangeInputBodyWaterValue,
  inputContentValue,
  onChangeInputContentValue,
  onSubmitWorkoutForm,
  role,
  succesMessageAddWorkout,
  errorMessageAddWorkout,
}) => {
  const dateToString = formatWithOptions({ fr }, 'dd-MM-yyyy');
  const availableDate = new Date();

  const handleOnChangeDate = (date) => {
    onChangeInputDateValue(date);
  };

  const handleOnChangeWeight = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputWeightValue(DataParsed);
  };

  const handleOnChangeMuscleMass = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputMuscleMassValue(DataParsed);
  };

  const handleOnChangeFatMass = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputFatMassValue(DataParsed);
  };

  const handleOnChangeBoneMass = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputBoneMassValue(DataParsed);
  };

  const handleOnChangeBodyWater = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputBodyWaterValue(DataParsed);
  };

  const handleOnChangeContent = (event) => {
    onChangeInputContentValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitWorkoutForm();
  };

  return (
    <div className="add-workout">
      <div className="add-workout__mainContainer">
        <div className="add-workout__container">
          <h1 className="add-workout__title">Ajouter un entraînement</h1>
          <form
            className="add-workout__form"
            onSubmit={handleOnSubmit}
            action="post"
            method="post"
          >
            <div className="add-workout__form-subpart">
              <div className="add-workout__form-date">
                <label
                  className="add-workout__form-label-date"
                  htmlFor="date"
                >
                  Sélectionner une date
                  <DatePicker
                    selected={inputDateValue}
                    onChange={handleOnChangeDate}
                    dateFormat={dateToString}
                    maxDate={availableDate}
                    minDate={new Date('01-01-2021')}
                    inline
                    locale="fr"
                  />
                </label>
              </div>

              <div className="add-workout__form-health">
                <p className="add-workout__form-subtitle">Ajouter vos données de santé</p>
                <div className="add-workout__form-healthData">
                  <label
                    className="add-workout__form-weight"
                    htmlFor="weight"
                  >
                    Poids
                    <input
                      className="add-workout__form-input"
                      type="number"
                      value={inputWeightValue}
                      onChange={handleOnChangeWeight}
                      required
                    />
                    kg
                  </label>

                  <label
                    className="add-workout__form-muscular"
                    htmlFor="muscular"
                  >
                    Masse musculaire
                    <input
                      className="add-workout__form-input"
                      type="number"
                      value={inputMuscleMassValue}
                      onChange={handleOnChangeMuscleMass}
                      required
                    />
                    %
                  </label>

                  <label
                    className="add-workout__form-fat"
                    htmlFor="fat"
                  >
                    Masse graisseuse
                    <input
                      className="add-workout__form-input"
                      type="number"
                      value={inputFatMassValue}
                      onChange={handleOnChangeFatMass}
                      required
                    />
                    %
                  </label>

                  <label
                    className="add-workout__form-bone"
                    htmlFor="bone"
                  >
                    Masse osseuse
                    <input
                      className="add-workout__form-input"
                      type="number"
                      value={inputBoneMassValue}
                      onChange={handleOnChangeBoneMass}
                      required
                    />
                    %
                  </label>

                  <label
                    className="add-workout__form-water"
                    htmlFor="water"
                  >
                    Masse hydrique
                    <input
                      className="add-workout__form-input"
                      type="number"
                      value={inputBodyWaterValue}
                      onChange={handleOnChangeBodyWater}
                      required
                    />
                    %
                  </label>
                </div>
                {errorMessageAddWorkout && (
                <div className="errorMessageAddWorkout">
                  <p className="errorMessageAddWorkout__text">{errorMessageAddWorkout}</p>
                </div>
                )}
              </div>
            </div>

            <div className="add-workout__form-details">
              <label
                className="add-workout__form-details-label"
                htmlFor="details"
              >
                Détailler la séance
                <textarea
                  className="add-workout__form-details-input"
                  type="text"
                  value={inputContentValue}
                  onChange={handleOnChangeContent}
                />
              </label>
            </div>

            {role === 'COACH' && (
              <div className="add-workout__form-comment">
                <label
                  className="label__comment"
                  htmlFor="comment"
                >
                  Ajouter un commentaire
                  <input
                    className="input__comment"
                    type="text"
                  />
                </label>
              </div>
            )}

            <div className="add-workout__form-submit">
              <button
                className="add-workout__form-text"
                type="submit"
              >
                Valider
              </button>
            </div>
            {succesMessageAddWorkout && (
              <div className="successMessageAddWorkout">
                <p className="successMessageAddWorkout__text">{succesMessageAddWorkout}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

// == Props Validation

AddWorkout.propTypes = {
  inputDateValue: PropTypes.string.isRequired,
  onChangeInputDateValue: PropTypes.func.isRequired,
  inputWeightValue: PropTypes.number.isRequired,
  onChangeInputWeightValue: PropTypes.func.isRequired,
  inputMuscleMassValue: PropTypes.number.isRequired,
  onChangeInputMuscleMassValue: PropTypes.func.isRequired,
  inputFatMassValue: PropTypes.number.isRequired,
  onChangeInputFatMassValue: PropTypes.func.isRequired,
  inputBoneMassValue: PropTypes.number.isRequired,
  onChangeInputBoneMassValue: PropTypes.func.isRequired,
  inputBodyWaterValue: PropTypes.number.isRequired,
  onChangeInputBodyWaterValue: PropTypes.func.isRequired,
  inputContentValue: PropTypes.string.isRequired,
  onChangeInputContentValue: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  onSubmitWorkoutForm: PropTypes.func.isRequired,
  succesMessageAddWorkout: PropTypes.string,
  errorMessageAddWorkout: PropTypes.string,
};

AddWorkout.defaultProps = {
  succesMessageAddWorkout: null,
  errorMessageAddWorkout: null,
};

// == Export
export default AddWorkout;

/*
  <input
    className="input__date"
    type="date"
    value={inputDateValue}
    onChange={handleOnChangeDate}
    required
  />
*/
