import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, User, UserInfo, ListStats, ItemStats, Label, Quantity } from './styleProfile';

function Profile({ name, tag, location, avatar, stats }) {
    return (
        <CardWrapper>
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                />
                <User>{name}</User>
                <UserInfo>@{tag}</UserInfo>
                <UserInfo>{location}</UserInfo>
            </div>

            <ListStats>
                <ItemStats>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </ItemStats>
                <ItemStats>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </ItemStats>
                <ItemStats>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </ItemStats>
            </ListStats>
        </CardWrapper>)
}
Profile.defaultProps = {
    avatar:
        'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Profile;