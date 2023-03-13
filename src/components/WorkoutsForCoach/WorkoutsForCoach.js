// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

import WorkoutForCoach from './WorkoutForCoach';

// dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const WorkoutsForCoach = ({ workoutsForCoach, getWorkoutsForCoach }) => {
  useEffect(getWorkoutsForCoach, []);

  return (
    <div className="workouts">
      <h1 className="workouts__title">Entraînements</h1>
      {/*
        <div className="selectWorkout">
          <label
            className="selectWorkout__label"
            htmlFor="workout-select"
          >
            Training effectués
            <select
              className="selectWorkout__select"
              name="workouts"
              id="workout-select"
            >
              <option value="">Sélectionner une date</option>
              {
                workouts.map((dateItem) => (
                  <option value={dateItem.date} key={dateItem.id}>{dayjs(dateItem.date).tz('Europe/Paris').locale('fr').format('dddd DD MMMM')}
                  </option>
                ))
              }
            </select>
          </label>
        </div>
        */}
      <ul className="workouts__content">
        {workoutsForCoach.map((workout) => <WorkoutForCoach key={workout.id} {...workout} />)}
      </ul>
    </div>
  );
};

// == Props Validation
WorkoutsForCoach.propTypes = {
  workoutsForCoach: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getWorkoutsForCoach: PropTypes.func.isRequired,
};

// == Export
export default WorkoutsForCoach;
