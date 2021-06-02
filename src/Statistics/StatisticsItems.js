import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsItems.module.css';

const StatisticsItems = ({ items }) => {
  const { label, percentage } = items;
  return (
    <li
      className={style.item}
      style={{
        backgroundColor: `rgb(${Math.round(Math.random() * 255)},${Math.round(
          Math.random() * 255,
        )},${Math.round(Math.random() * 255)})`,
      }}
    >
            <span className={style.label}>{label}</span>      
      <span className={style.percentage}>{percentage}%</span>    
    </li>
  );
};
StatisticsItems.propTypes = {
  items: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
export default StatisticsItems;
