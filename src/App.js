 import Main from './components/Main';
import { CharacterAnimationsProvider } from './context/CharacterAnimations';

function App() {
  return (
    <div className="App">
      <CharacterAnimationsProvider>
        <Main />
      </CharacterAnimationsProvider>
    </div>
  );
}

export default App;
