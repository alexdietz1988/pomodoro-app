import { useState, useEffect } from 'react';
import * as Styled from './Timer.styles';
import { type PomodoroLogEntry } from '../App';
import bell from '../bell.wav';

const defaultDuration = 25 * 60 * 1000;
// const defaultDuration = 3000;

const getNewPomodoroLog = (currentLog: PomodoroLogEntry[]) => {
  const today = new Date().toLocaleDateString();
  if (currentLog.length === 0) {
    return [{ date: today, count: 1 }];
  }
  const lastEntry = currentLog[currentLog.length - 1];
  if (lastEntry.date !== today) {
    return [...currentLog, { date: today, count: 1 }];
  }
  const updatedCount = lastEntry.count + 1;
  return [...currentLog.slice(0, -1), { date: today, count: updatedCount }];
};

interface TimerProps {
  setPomodoroLog: React.Dispatch<React.SetStateAction<PomodoroLogEntry[]>>;
  setIsInProgress: React.Dispatch<React.SetStateAction<boolean>>;
}

const formatTime = (time: number) =>
  Math.floor(time).toString().padStart(2, '0');

const Timer = ({ setPomodoroLog, setIsInProgress }: TimerProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [millisecondsLeft, setMillisecondsLeft] = useState(defaultDuration);

  const minutesLeft = formatTime(millisecondsLeft / 1000 / 60);
  const secondsLeft = formatTime((millisecondsLeft / 1000) % 60);
  document.title = `Pomodoro App (${minutesLeft}:${secondsLeft})`;

  useEffect(() => {
    const audio = new Audio(bell);
    const handleComplete = () => {
      audio.play();
      setIsRunning(false);
      setIsInProgress(false);
      setPomodoroLog((prevLog) => getNewPomodoroLog(prevLog));
      setTimeout(() => setMillisecondsLeft(defaultDuration), 2000);
    };
    if (!isRunning) return;
    const interval = setInterval(() => {
      setMillisecondsLeft((prev) => {
        if (prev === 1000) {
          handleComplete();
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, setPomodoroLog, setIsInProgress]);

  return (
    <Styled.Timer>
      <div>
        {minutesLeft}:{secondsLeft}
      </div>
      <button
        onClick={() => {
          if (!isRunning) {
            setIsInProgress(true);
            setMillisecondsLeft((prev) => prev - 1000);
          }
          setIsRunning((prev) => !prev);
        }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </Styled.Timer>
  );
};

export default Timer;
