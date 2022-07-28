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
import { Page1DetailA } from './components5/Page1DetailA';
import { Page1DetailB } from './components5/Page1DetailB';

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

        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route exact path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route exact path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />

        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
