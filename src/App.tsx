import { useState, useEffect } from 'react';
import * as Styled from './App.styles.ts';

const defaultDuration = 25 * 60 * 1000;

interface PomodoroLogEntry {
  date: string;
  count: number;
}

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [millisecondsLeft, setMillisecondsLeft] = useState(defaultDuration);
  const [pomodoroLog, setPomodoroLog] = useState<PomodoroLogEntry[]>([
    { date: new Date().toLocaleDateString(), count: 3 },
  ]);
  const minutesLeft = Math.floor(millisecondsLeft / 1000 / 60)
    .toString()
    .padStart(2, '0');
  const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60)
    .toString()
    .padStart(2, '0');
  document.title = `Pomodoro Timer (${minutesLeft}:${secondsLeft})`;

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

  const updateLog = () => {
    const today = new Date().toLocaleDateString();
    if (pomodoroLog[pomodoroLog.length - 1].date !== today) return;
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

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const datesInCurrentMonth = Array.from(
    {
      length: new Date(currentYear, currentMonth + 1, 0).getDate(),
    },
    (_, i) => {
      const newDate = new Date(currentYear, currentMonth, i + 1);
      const day = newDate.getDay();
      return {
        fullDate: newDate.toLocaleDateString(),
        isWeekend: day === 0 || day === 6,
      };
    }
  );

  return (
    <Styled.Container>
      <Styled.TimerAndLog>
        <Styled.Timer>
          <div>
            {minutesLeft}:{secondsLeft}
          </div>
          <button onClick={() => setIsRunning((prev) => !prev)}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
        </Styled.Timer>
        <Styled.Log>
          {/* {new Date().toLocaleString('default', { month: 'long' })} */}
          {datesInCurrentMonth.map((date) => {
            const logEntry = pomodoroLog.find(
              (entry) => entry.date === date.fullDate
            );
            return (
              <Styled.LogEntry isWeekend={date.isWeekend} key={date.fullDate}>
                {date.fullDate} {logEntry && logEntry.count}
                {/* , {day.day} */}
              </Styled.LogEntry>
            );
          })}
        </Styled.Log>
      </Styled.TimerAndLog>
      <Styled.Iframe
        src="https://www.youtube.com/embed/zh_pECrHHOY"
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></Styled.Iframe>
    </Styled.Container>
  );
};

export default App;
