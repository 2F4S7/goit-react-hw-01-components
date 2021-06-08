import React from 'react';
import PropTypes from 'prop-types';

const TransactionUser = ({ items }) => {
    const { type, amount, currency } = items;

    return (
        <tr>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
        </tr>
    );
};

TransactionUser.propTypes = {
    items: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};

export default TransactionUser;
