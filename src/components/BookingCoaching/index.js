// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// == Imports
import Coachs from 'src/containers/GetCoachs/Coachs';
import './style.scss';

// date fns
import fr from 'date-fns/locale/fr';
import formatWithOptions from 'date-fns/fp/formatWithOptions';

// dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

// date fns
registerLocale('fr', fr);

// dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const BookingCoaching = ({
  startDate,
  setStartDate,
  selectedDate,
  onChangeInputSlotValue,
  onSubmitAddCoachingForm,
  errorMessage,
  successMessageBookingCoaching,
}) => {
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleOnChangeSlot = (event) => {
    onChangeInputSlotValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitAddCoachingForm();
  };

  const dateToString = formatWithOptions({ fr }, 'dd-MM-yyyy');
  const availableDate = new Date();

  return (
    <div className="booking-coaching">
      <div className="booking-coaching__mainContainer">

        <div className="booking-coaching__container">
          <p className="booking-coaching__title">Réserver un coaching</p>
          <div className="booking-coaching__content">
            <label
              className="add-coaching__label-date"
              htmlFor="date"
            >
              Sélectionner une date
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat={dateToString}
                minDate={availableDate}
                filterDate={(date) => date.getDay() !== 0}
                inline
                locale="fr"
                id="date"
              />
              {errorMessage && (
                <div className="errorBookingCoaching">
                  <p className="errorBookingCoaching__text">{errorMessage}</p>
                </div>
              )}

              {!selectedDate.length && (
                <div className="noCoaching">
                  <p className="noCoaching__text">Pas de coaching disponible à cette date</p>
                </div>
              )}
            </label>


            <form
              onSubmit={handleOnSubmit}
            >
              <select
                className="add-coaching__select"
                name="coaching"
                id="coaching-select"
                onChange={handleOnChangeSlot}
              >
                <option value="">Sélectionner un créneau</option>
                {
                  selectedDate.map((slot) => (
                    <option
                      value={slot.id}
                      key={slot.id}
                    >
                      {dayjs(slot.startTime).tz('Europe/Paris').locale('fr').format('H:mm')} - {dayjs(slot.endTime).tz('Europe/Paris').locale('fr').format('H:mm')} {slot.coachFirstname}
                    </option>
                  ))
                }
              </select>
              <div className="submitCoaching">
                <button
                  className="submitCoaching__text"
                  type="submit"
                >
                  Valider
                </button>
              </div>
              {successMessageBookingCoaching && (
                <div className="successBookingCoaching">
                  <p className="successBookingCoaching__text">{successMessageBookingCoaching}</p>
                </div>
              )}
            </form>

          </div>
        </div>
      </div>
      <div className="booking-coaching__coachContainer">
        <div className="booking-coaching__coachs">
          <Coachs />
        </div>
      </div>
    </div>
  );
};

// == Props Validation
BookingCoaching.propTypes = {
  startDate: PropTypes.string.isRequired,
  setStartDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      coachFirstname: PropTypes.string.isRequired,
      coachLastname: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChangeInputSlotValue: PropTypes.func.isRequired,
  onSubmitAddCoachingForm: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  successMessageBookingCoaching: PropTypes.string,
};

BookingCoaching.defaultProps = {
  errorMessage: null,
  successMessageBookingCoaching: null,
};

// == Export
export default BookingCoaching;
