import './App.css';
import { Router } from './components6/router/Router';
import { UserProvider } from './components6/providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
