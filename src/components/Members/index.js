// == Import npm
import React, { useEffect } from 'react';
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

// dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const Members = ({ getAllMembers, allMembers }) => {
  useEffect(getAllMembers, []);
  // console.log('allMembers', allMembers);
  return (
    <div className="members-page">
      <div className="members-page-image">
        <div className="members-page-text-content">
          <h2 className="members-page-title">Listing des adhérents</h2>
          <p className="members-page-number">{allMembers.length} adhérents</p>
        </div>
      </div>
      <div className="members-page-container">
        {
          allMembers.map((memberObject) => (
            <div className="members-page-list">
              <ul key={memberObject.id} className="members-page-list-item">
                <li className="members-page-list-item-date">Inscription le {dayjs(memberObject.createdAt).tz('Europe/Paris').locale('fr').format('DD MMMM YYYY')}</li>
                <li className="members-page-list-item-info">{memberObject.firstname}</li>
                <li className="members-page-list-item-info">{memberObject.lastname}</li>
                <li className="members-page-list-item-info">{memberObject.email}</li>

              </ul>
            </div>
          ))
      }
      </div>
    </div>
  );
};

// == Props Validation
Members.propTypes = {
  getAllMembers: PropTypes.func.isRequired,
  allMembers: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Members;
