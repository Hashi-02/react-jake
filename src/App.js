import './App.css';
import { PrimaryButton } from './components6/Atoms/button/PrimaryButton';
import { SecondaryButton } from './components6/Atoms/button/SecondaryButton';
import { SearchInput } from './components6/molecules/SearchInput';
import { UserCard } from './components6/organisms/user/UserCard';

function App() {
  const user = {
    name: 'はし',
    image: 'https://source.unsplash.com/p6yH8VmGqxo',
    email: 'exsample@email.com',
    phone: 'XXXX-XXXX-XXXX',
    company: {
      name: 'テスト会社',
    },
    website: 'https://google.com',
  };
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
