import './App.css';
import { Router } from './components6/router/Router';
import { UserProvider } from './components6/providers/UserProvider';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
