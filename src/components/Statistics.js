import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
    return (<section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {stats.map(stat => {
                return (<li key={stat.id} className="item">
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{`${stat.percentage}%`}</span>
                </li>)
            })}
        </ul>
    </section>)
}

Statistics.defaultProps = {
    title: '',
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }),
    ).isRequired,
}

export default Statistics;