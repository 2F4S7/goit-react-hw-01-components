import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statistics from './data/statistical.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Btn from './header/btn';
import Container from './Container/Container';

const App = () => {
  return (
    <>
      <Btn title="React Home Work Components 01" />
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="UPLOAD STATS" stats={statistics} />
        <Statistics stats={statistics} />
        <FriendList friends={friends} />
      </Container>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
