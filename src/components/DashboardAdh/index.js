// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Imports
import Coachings from 'src/containers/Coachings/Coachings';
import Workouts from 'src/containers/Workouts/Workouts';
import HealthCheck from 'src/components/HealthCheck';

import './style.scss';

// == Composant
const DashboardAd = ({ healthCheck, getHealthCheck }) => {
  useEffect(getHealthCheck, []);

  const findLastHealthCheck = healthCheck[healthCheck.length - 1];
  const data = { ...findLastHealthCheck };

  return (
    <div className="dashboardMember">
      <div className="dashboardMember__left">
        <div className="dashboardMember__coaching">
          <div className="dashboardMember__coaching-last">
            <Coachings title="Prochain coaching" />
          </div>
          <div className="cta">
            <p className="cta__content">
              <Link to="/booking-coaching" className="cta__text">Réserver un coaching</Link>
            </p>
          </div>
        </div>

        <div className="dashboardMember__workout">
          <div className="dashboardMember__workout-last">
            <Workouts title="Dernier entraînement" />
          </div>
          <p className="cta">
            <Link to="/add-workout" className="cta__text">Ajouter un entraînement</Link>
          </p>
        </div>
      
      </div>

      <div className="dashboardMember__healthData">
        <HealthCheck findLastHealthCheck={data} />
      </div>
    </div>
  );
};

// == Props Validation
DashboardAd.propTypes = {
  healthCheck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  getHealthCheck: PropTypes.func.isRequired,
};

// == Export
export default DashboardAd;
