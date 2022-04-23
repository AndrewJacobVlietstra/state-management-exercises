import Counter from './components/Counter';
import CounterContext from './context/counterContext';


function App() {
  return (
    <CounterContext>
      <Counter />
    </CounterContext>
  );
}

export default App;
