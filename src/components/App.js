import React from 'react';
import Profile from './profile/Profile';
import user from '../data/user.json';
import Statistics from './statistics/Statistics'
import statisticalData from '../data/statisticalData.json';
import FriendList from './friendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

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
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    )
}