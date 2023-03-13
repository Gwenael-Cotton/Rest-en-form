// == Import npm
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const HealthCheck = ({ findLastHealthCheck }) => {
  const { muscleMass, fatMass, boneMass } = findLastHealthCheck;

  const defaultLabelStyle = {
    fontSize: '.4em',
    fontFamily: 'Catamaran, sans-serif',
  };

  const shiftSize = 4;

  return (
    <div className="health-check">
      <h2 className="health-check__title">Suivi santé</h2>
      <p className="health-check__weight">{findLastHealthCheck.weight} kg</p>
      <div className="health-check__charts">
        <PieChart
          className="pie__chart"
          data={[
            { title: 'muscleMass', value: muscleMass, color: '#cb997e' },
            { title: 'fatMass', value: fatMass, color: '#ddbea9' },
            { title: 'boneMass', value: boneMass, color: '#ffe8d6' },
          ]}
          radius={PieChart.defaultProps.radius - shiftSize}
          segmentsShift={(index) => (index === 0 ? shiftSize : 4)}
          style={{ height: '240px' }}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
          labelStyle={{
            ...defaultLabelStyle,
          }}
        />
        <div className="health-check__data">
          <div className="water__data">
            <p className="data-text">Masse hydrique</p>
            <p className="data-text bodyWater">{findLastHealthCheck.bodyWater} %</p>
          </div>
          <div className="other__data">
            <p className="data-text"><span className="data-text--muscleMass">______</span> masse masculaire</p>
            <p className="data-text"><span className="data-text--fatMass">______</span> masse graisseuse</p>
            <p className="data-text"><span className="data-text--boneMass">______</span> masse osseuse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Props Validation
HealthCheck.propTypes = {
  findLastHealthCheck: PropTypes.shape({
    weight: PropTypes.number.isRequired,
    bodyWater: PropTypes.number.isRequired,
    muscleMass: PropTypes.number.isRequired,
    fatMass: PropTypes.number.isRequired,
    boneMass: PropTypes.number.isRequired,
  }).isRequired,
};

// == Export
export default HealthCheck;
