import './App.css';
// import { InlineStyle } from './components/InlineStyle';
// import { CssModules } from './components/CssModules';
// import { StyledJsx } from './components/StyledJsx';
// import { StyledComponets } from './components/StyledComponets';
// import { Emotion } from './components/Emotion';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
