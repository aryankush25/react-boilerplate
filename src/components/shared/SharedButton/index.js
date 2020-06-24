import React from 'react';

import './styles.scss';

const SharedButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default SharedButton;
