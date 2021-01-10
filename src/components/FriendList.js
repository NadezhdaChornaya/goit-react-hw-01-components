import React from 'react';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(({ id, isOnline, avatar, name }) => {
                return (
                    <li key={id} className="item">
                        <span className="status">
                        </span>
                        <img className="avatar" src={avatar} alt="avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )

}

FriendList.defaultProps = {
    avatar:
        'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default FriendList;