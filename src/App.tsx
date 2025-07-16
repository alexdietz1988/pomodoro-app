import { useState, useEffect } from 'react';
import * as Styled from './App.styles.ts';

const defaultDuration = 25 * 60 * 1000;

interface PomodoroLogEntry {
  date: string;
  count: number;
}

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [millisecondsLeft, setMillisecondsLeft] = useState(defaultDuration);
  const minutesLeft = Math.floor(millisecondsLeft / 1000 / 60)
    .toString()
    .padStart(2, '0');
  const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60)
    .toString()
    .padStart(2, '0');

  const [pomodoroLog, setPomodoroLog] = useState<PomodoroLogEntry[]>([
    { date: new Date().toLocaleDateString(), count: 0 },
  ]);

  useEffect(() => {
    if (!isRunning) return;
    const updateLog = () => {
      const today = new Date().toLocaleDateString();
      if (pomodoroLog[pomodoroLog.length - 1].date !== today) return;
      const previousCount = pomodoroLog[pomodoroLog.length - 1].count;
      setPomodoroLog((prevLog) => [
        ...prevLog.slice(0, -1),
        { date: today, count: previousCount + 1 },
      ]);
    };
    setMillisecondsLeft(defaultDuration - 1000);
    const interval = setInterval(() => {
      setMillisecondsLeft((prev) => {
        if (prev <= 1000) {
          setIsRunning(false);
          updateLog();
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, pomodoroLog]);

  useEffect(() => {
    document.title = `Pomodoro Timer (${minutesLeft}:${secondsLeft})`;
  }, [minutesLeft, secondsLeft]);

  return (
    <>
      <Styled.Timer>
        <div>
          {minutesLeft}:{secondsLeft}
        </div>
        <button onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </Styled.Timer>
      <div>
        {pomodoroLog.map((entry) => (
          <>
            {entry.date}: {entry.count}
          </>
        ))}
      </div>
    </>
  );
};

export default App;
