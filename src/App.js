import './App.css';
// import { InlineStyle } from './components/InlineStyle';
// import { CssModules } from './components/CssModules';
// import { StyledJsx } from './components/StyledJsx';
// import { StyledComponets } from './components/StyledComponets';
// import { Emotion } from './components/Emotion';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from './components5/Home';
import { Page1 } from './components5/Page1';
import { Page2 } from './components5/Page2';

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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
