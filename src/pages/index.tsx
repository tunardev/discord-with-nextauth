import { NextPage } from 'next';
import User from '@/components/User';

const App: NextPage = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <User />
    </main>
  );
};

export default App;
