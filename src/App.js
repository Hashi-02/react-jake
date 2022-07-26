import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponets } from './components/StyledComponets';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponets />
    </div>
  );
}

export default App;
