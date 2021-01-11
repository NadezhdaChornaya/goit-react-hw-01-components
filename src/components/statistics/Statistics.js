import React from 'react';
import PropTypes from 'prop-types';
import { randomFrom, Section, Title, ListStat, ItemStat, Label, Percentage } from './styleStatistics';
import backgroundColor from './backgroundColor.json';

function Statistics({ title, stats }) {
    return (<Section>
        <Title>{title}</Title>

        <ListStat>
            {stats.map(({ id, label, percentage }) => {
                return (<ItemStat key={id} backColor={randomFrom(backgroundColor)}>
                    <Label>{label}</Label>
                    <Percentage>{`${percentage}%`}</Percentage>
                </ItemStat>)
            })}
        </ListStat>
    </Section>)
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