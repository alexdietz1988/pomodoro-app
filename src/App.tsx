import { useState, useEffect } from 'react';
import * as Styled from './App.styles.ts';
import Timer from './Timer/Timer.component.tsx';
import Log from './Log/Log.component.tsx';
import Video from './Video/Video.component.tsx';

const defaultPomodoroLog: PomodoroLogEntry[] = [];

export interface PomodoroLogEntry {
  date: string;
  count: number;
}

const App = () => {
  const [pomodoroLog, setPomodoroLog] =
    useState<PomodoroLogEntry[]>(defaultPomodoroLog);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const storedLog = localStorage.getItem('pomodoroLog');
    if (storedLog) {
      setPomodoroLog(JSON.parse(storedLog));
    }
  }, []);

  useEffect(() => {
    if (isResetting || pomodoroLog !== defaultPomodoroLog) {
      localStorage.setItem('pomodoroLog', JSON.stringify(pomodoroLog));
    }
    if (isResetting) {
      setIsResetting(false);
    }
  }, [pomodoroLog, isResetting]);

  return (
    <Styled.Container>
      <h1>Pomodoro App</h1>
      <Styled.TimerAndLog>
        <Timer pomodoroLog={pomodoroLog} setPomodoroLog={setPomodoroLog} />
        <Log pomodoroLog={pomodoroLog} />
      </Styled.TimerAndLog>
      <Video />
      <button
        onClick={() => {
          setPomodoroLog(defaultPomodoroLog);
          setIsResetting(true);
        }}
      >
        Reset Log
      </button>
    </Styled.Container>
  );
};

export default App;
