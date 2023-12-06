import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from '@react-spring/web'
import MagneticCircle from './MagneticCircle';

function App() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })

  return (
    <div className="App">
      <MagneticCircle />
    </div>
  );
}

export default App;
