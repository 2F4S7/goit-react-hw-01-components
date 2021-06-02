import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from './data/user.json';
import statistics from './data/statistical.json';

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
    </>
  );
};

export default App;
