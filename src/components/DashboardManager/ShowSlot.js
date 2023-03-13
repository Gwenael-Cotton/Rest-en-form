import React from 'react';
import PropTypes from 'prop-types';

const showSlot = () => (
  <div className="dashboard-slot">
    <span className="dashboard-slot-title">Liste des créneaux enregistrés</span>
    <ul>
      <li>Date</li>
      <li>Heure de début</li>
      <li>Heure de fin</li>
      <li>Coach</li>
    </ul>
    <ul>
      <li>date</li>
      <li>debut</li>
      <li>fin</li>
      <li>Sountid</li>
    </ul>
  </div>
);

showSlot.propTypes = {};
export default showSlot;
