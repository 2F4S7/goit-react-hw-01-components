import PropTypes from 'prop-types';
import React from 'react';
import style from './TransactionHistory.module.css';
import TransactionUser from './TransactionUser';

const TransactionHistory = ({ items }) => {
    return (
        <table className={style.TransactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <TransactionUser key={item.id} items={item} />
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired }),
    ).isRequired,
};

export default TransactionHistory;
