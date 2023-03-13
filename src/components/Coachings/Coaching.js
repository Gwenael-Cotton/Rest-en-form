// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import { BsCalendarFill } from 'react-icons/bs';
import { BsClockFill } from 'react-icons/bs';

// == Imports
import './style.scss';

import dayjs from 'dayjs';

// dayjs
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const Coaching = ({ coachFirstname, coachLastname, startTime, endTime }) => {

  const formatedDay = dayjs(startTime).tz('Europe/Paris').locale('fr').format('dddd D MMMM');
  const formatedStartTime = dayjs(startTime).tz('Europe/Paris').locale('fr').format('H:mm');
  const formatedEndTime = dayjs(endTime).tz('Europe/Paris').locale('fr').format('H:mm');

  return (
    <div className="coaching">
      <div className="coaching__coach">
        <img
          className="img"
          src={`profil-pictures/${coachFirstname.toLowerCase()}_${coachLastname.toLowerCase()}.jpg`}
          alt=""
        />
        <p
          className="name"
        >
          {coachFirstname}
        </p>
      </div>

      <div className="coaching__datetime">
        <p
          className="date"
        >
          {formatedDay}
        </p>
        <p
          className="time"
        >
          {formatedStartTime} - {formatedEndTime}
        </p>
      </div>

      <div className="coaching__icons">
        <BsCalendarFill className="calendar" />
        <BsClockFill className="clock" />
      </div>
    </div>
  );
};

// == Props Validation
Coaching.propTypes = {
  coachFirstname: PropTypes.string.isRequired,
  coachLastname: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

// == Export
export default Coaching;
