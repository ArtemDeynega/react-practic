import PropTypes from 'prop-types';
// import { formatEventStart } from 'utils/formatEventStart';
// import { formatEventDuration } from 'utils/formatEventDuration';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants/index';

import {
    FaMapMarkerAlt,
    FaUserAlt,
    FaCalendarAlt,
    FaClock,
} from 'react-icons/fa';

import css from './EventCard.module.css';

export const EventCard = ({
    name,
    location,
    speaker,
    type,
    start,
    end,
}) => {
    const formattedStart = formatEventStart(start);
    const formatDistance = formatEventDuration(start, end);
    // console.log(css);
    // console.log(css[type]);
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                <FaMapMarkerAlt
                    className={css.icon}
                    size={iconSize.sm}
                    color="blue"
                />
                {location}
            </p>
            <p className={css.info}>
                <FaUserAlt
                    className={css.icon}
                    size={iconSize.sm}
                    color="blue"
                />
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt
                    className={css.icon}
                    size={iconSize.sm}
                    color="blue"
                />
                {formattedStart}
            </p>
            <p className={css.info}>
                <FaClock
                    className={css.icon}
                    size={iconSize.sm}
                    color="blue"
                />
                {formatDistance}
            </p>
            <span className={`${css.chip} ${css[type]}`}>{type}</span>
        </div>
    );
};
EventCard.protoType = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
};
