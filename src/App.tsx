import { useState, useEffect } from 'react';
import * as Styled from './App.styles.ts';

const defaultDuration = 25 * 60 * 1000;

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [millisecondsLeft, setMillisecondsLeft] = useState(defaultDuration);
  const minutesLeft = Math.floor(millisecondsLeft / 1000 / 60)
    .toString()
    .padStart(2, '0');
  const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60)
    .toString()
    .padStart(2, '0');

  useEffect(() => {
    if (!isRunning) return;
    setMillisecondsLeft(defaultDuration - 1000);
    const interval = setInterval(() => {
      setMillisecondsLeft((prev) => {
        if (prev <= 1000) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    document.title = `Pomodoro Timer (${minutesLeft}:${secondsLeft})`;
  }, [minutesLeft, secondsLeft]);

  return (
    <Styled.Timer>
      <div>
        {minutesLeft}:{secondsLeft}
      </div>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </Styled.Timer>
  );
};

export default App;
