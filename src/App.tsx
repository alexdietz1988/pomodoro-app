import { useState, useEffect } from 'react';
import * as Styled from './App.styles.ts';
import Timer from './Timer/Timer.component.tsx';
import Log from './Log/Log.component.tsx';
import Video from './Video/Video.component.tsx';

const defaultPomodoroLog: PomodoroLogEntry[] = [
  { date: new Date().toLocaleDateString(), count: 0 },
];

export interface PomodoroLogEntry {
  date: string;
  count: number;
}

const App = () => {
  const [pomodoroLog, setPomodoroLog] =
    useState<PomodoroLogEntry[]>(defaultPomodoroLog);

  useEffect(() => {
    const storedLog = localStorage.getItem('pomodoroLog');
    if (storedLog) {
      setPomodoroLog(JSON.parse(storedLog));
    }
  }, []);
  useEffect(() => {
    if (pomodoroLog !== defaultPomodoroLog)
      localStorage.setItem('pomodoroLog', JSON.stringify(pomodoroLog));
  }, [pomodoroLog]);

  return (
    <Styled.Container>
      <h1>Pomodoro App</h1>
      <Styled.TimerAndLog>
        <Timer pomodoroLog={pomodoroLog} setPomodoroLog={setPomodoroLog} />
        <Log pomodoroLog={pomodoroLog} />
      </Styled.TimerAndLog>
      <Video />
    </Styled.Container>
  );
};

export default App;
