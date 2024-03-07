import AnimatedList from './components/AnimatedList';
import { generateHumans } from './utils/helpers/humanConstructor';

function App() {
  const humans = generateHumans(100)

  return (
    <AnimatedList elements={humans} />
  );
}

export default App;
