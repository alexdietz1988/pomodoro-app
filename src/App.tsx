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
  const [isInProgress, setIsInProgress] = useState(false);
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

  const resetLog = () => {
    setPomodoroLog(defaultPomodoroLog);
    setIsResetting(true);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TimerAndVideoContainer>
          <Timer
            setPomodoroLog={setPomodoroLog}
            setIsInProgress={setIsInProgress}
          />
          <Video />
        </Styled.TimerAndVideoContainer>
        <div>
          <Log
            pomodoroLog={pomodoroLog}
            isInProgress={isInProgress}
            resetLog={resetLog}
          />
        </div>
      </Styled.Content>
    </Styled.Container>
  );
};

export default App;
