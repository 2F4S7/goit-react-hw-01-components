import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statistics from './data/statistical.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="stats" stats={statistics} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />;
        </>
    );
};

export default App;
