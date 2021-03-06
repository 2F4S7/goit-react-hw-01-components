import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';
import colors from './colortransactionhistory';

const TransactionUser = ({ items }) => {
  const { type, amount, currency } = items;

  return (
    <tr
      className={style.tr}
      style={{
        backgroundColor: colors(type),
      }}
    >
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
  );
};

TransactionUser.defaultProps = {
  avatar: '../images/no-image-u.png',
  tag: '(empty)',
  location: '(empty)',
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

TransactionUser.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionUser;
