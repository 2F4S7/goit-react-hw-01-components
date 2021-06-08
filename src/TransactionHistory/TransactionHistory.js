import PropTypes from 'prop-types';
import React from 'react';
import style from './TransactionHistory.module.css';
import TransactionUser from './TransactionUser';
// import

const TransactionHistory = ({ items }) => {
    return (
        <table className={style.TransactionHistory}>
            <thead>
                <tr>
                    <th className={style.th}>Type</th>
                    <th className={style.th}>Amount</th>
                    <th className={style.th}>Currency</th>
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
