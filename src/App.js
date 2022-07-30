import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components6/Atoms/button/PrimaryButton';
import { SecondaryButton } from './components6/Atoms/button/SecondaryButton';
import { SearchInput } from './components6/molecules/SearchInput';
import { UserCard } from './components6/organisms/user/UserCard';
import { DefaultLayouts } from './components6/templates/DefaultLayouts';

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
    <BrowserRouter>
      <DefaultLayouts>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>テスト</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayouts>
    </BrowserRouter>
  );
}

export default App;
