import { useState, useEffect } from 'react';
import * as Styled from './Timer.styles';
import { type PomodoroLogEntry } from '../App';

const defaultDuration = 25 * 60 * 1000;
// const defaultDuration = 3000;

interface TimerProps {
  pomodoroLog: PomodoroLogEntry[];
  setPomodoroLog: React.Dispatch<React.SetStateAction<PomodoroLogEntry[]>>;
}

const formatTime = (time: number) =>
  Math.floor(time).toString().padStart(2, '0');

const Timer = ({ pomodoroLog, setPomodoroLog }: TimerProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [millisecondsLeft, setMillisecondsLeft] = useState(defaultDuration);

  const minutesLeft = formatTime(millisecondsLeft / 1000 / 60);
  const secondsLeft = formatTime((millisecondsLeft / 1000) % 60);
  document.title = `Pomodoro App (${minutesLeft}:${secondsLeft})`;

  const updateLog = () => {
    const today = new Date().toLocaleDateString();
    if (pomodoroLog.length === 0) {
      setPomodoroLog(() => [{ date: today, count: 1 }]);
      return;
    }
    if (pomodoroLog[pomodoroLog.length - 1].date !== today) {
      setPomodoroLog((prevLog) => [...prevLog, { date: today, count: 1 }]);
      return;
    }
    const previousCount = pomodoroLog[pomodoroLog.length - 1].count;
    setPomodoroLog((prevLog) => [
      ...prevLog.slice(0, -1),
      { date: today, count: previousCount + 1 },
    ]);
  };

  if (isCompleted) {
    setIsRunning(false);
    updateLog();
    setIsCompleted(false);
    setMillisecondsLeft(defaultDuration);
  }

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setMillisecondsLeft((prev) => {
        if (prev === 1000) {
          setIsCompleted(true);
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <Styled.TimerContainer>
      <Styled.Timer>
        <div>
          {minutesLeft}:{secondsLeft}
        </div>
        <button
          onClick={() => {
            if (!isRunning) setMillisecondsLeft((prev) => prev - 1000);
            setIsRunning((prev) => !prev);
          }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </Styled.Timer>
    </Styled.TimerContainer>
  );
};

export default Timer;
