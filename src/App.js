import axios from 'axios';
import './App.css';
// import { Router } from './components6/router/Router';
// import { UserProvider } from './components6/providers/UserProvider';
// import { RecoilRoot } from 'recoil';

function App() {
  const onClickUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUsers1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    // <RecoilRoot>
    //   <UserProvider>
    //     <Router />
    //   </UserProvider>
    // </RecoilRoot>
    <>
      <button onClick={onClickUsers}>user</button>
      <button onClick={onClickUsers1}>user1</button>
    </>
  );
}

export default App;
