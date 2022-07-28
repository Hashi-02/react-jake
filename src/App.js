import './App.css';
import { PrimaryButton } from './components6/Atoms/button/PrimaryButton';
import { SecondaryButton } from './components6/Atoms/button/SecondaryButton';
import { SearchInput } from './components6/molecules/SearchInput';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}

export default App;
