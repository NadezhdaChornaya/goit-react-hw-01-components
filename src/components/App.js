import React from 'react';
import Profile from './Profile';
import user from './user.json';
import Statistics from './Statistics'
import statisticalData from './statisticalData.json';
import FriendList from './FriendList';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';

export default function App() {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />;
            <Statistics stats={statisticalData} />;
            <FriendList friends={friends} />;
            <TransactionHistory items={transactions} />;
        </>
    )
}