import React from 'react';
import PropTypes from 'prop-types';

import style from './FriendListItems.module.css';

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
        <li className={style.item}>
            <span
                className={[
                    style.status,
                    isOnline ? style.online : style.offline,
                ].join(' ')}
            ></span>

            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
};
FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};
export default FriendListItem;
