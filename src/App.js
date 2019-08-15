import React, {useState} from 'react';
import TodoClass from './components/TodoClass';
import TodoHooks from './components/TodoHooks';
import './App.css';

function App() {
  const [isShowing, setIsShowing] = useState(true);
  const handleToggle = () => {
    setIsShowing(!isShowing);
  }

  return (
    <div className="App">
      <TodoClass />
      {isShowing ? <TodoHooks /> : null}
      <button onClick={handleToggle}>Toggle form</button>
    </div>
  );
}

export default App;
