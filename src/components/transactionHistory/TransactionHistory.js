import React from 'react';
import PropTypes from 'prop-types';
import { TableTrensaction } from './styleTransaction';

function TransactionHistory({ items }) {
    return (
        <TableTrensaction>
            <thead className="transaction-head">
                <tr>
                    <th className="transaction-cell">Type</th>
                    <th className="transaction-cell">Amount</th>
                    <th className="transaction-cell">Currency</th>
                </tr>
            </thead>

            <tbody >
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className="transaction-body">
                            <td className="transaction-data">{type}</td>
                            <td className="transaction-data">{amount}</td>
                            <td className="transaction-data">{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </TableTrensaction>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            currency: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
};


export default TransactionHistory;