import { useState } from 'react';
import './App.css';
import { ChildArea } from './components/ChildArea';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <br />
      <br />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}

export default App;
