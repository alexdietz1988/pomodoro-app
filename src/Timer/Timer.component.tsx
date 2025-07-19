import { useState, useEffect } from 'react';
import * as Styled from './Timer.styles';
import { type PomodoroLogEntry } from '../App';

const defaultDuration = 25 * 60 * 1000;
// const defaultDuration = 3000;

interface TimerProps {
  setPomodoroLog: React.Dispatch<React.SetStateAction<PomodoroLogEntry[]>>;
}

const formatTime = (time: number) =>
  Math.floor(time).toString().padStart(2, '0');

const Timer = ({ setPomodoroLog }: TimerProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [millisecondsLeft, setMillisecondsLeft] = useState(defaultDuration);

  const minutesLeft = formatTime(millisecondsLeft / 1000 / 60);
  const secondsLeft = formatTime((millisecondsLeft / 1000) % 60);
  document.title = `Pomodoro App (${minutesLeft}:${secondsLeft})`;

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
  }, [isRunning, setPomodoroLog]);

  useEffect(() => {
    const updateLog = () => {
      const today = new Date().toLocaleDateString();
      setPomodoroLog((prevLog) => {
        if (prevLog.length === 0) {
          return [{ date: today, count: 1 }];
        }
        const lastEntry = prevLog[prevLog.length - 1];
        if (lastEntry.date !== today) {
          return [...prevLog, { date: today, count: 1 }];
        }
        const updatedCount = lastEntry.count + 1;
        return [...prevLog.slice(0, -1), { date: today, count: updatedCount }];
      });
    };
    if (isCompleted) {
      setIsRunning(false);
      updateLog();
      setIsCompleted(false);
    }
  }, [isCompleted, setPomodoroLog]);

  return (
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
  );
};

export default Timer;
