import * as Styled from './Log.styles';
import { type PomodoroLogEntry } from '../App';

interface LogProps {
  pomodoroLog: PomodoroLogEntry[];
  isInProgress: boolean;
}

const Log = ({ pomodoroLog, isInProgress }: LogProps) => {
  const today = new Date().toLocaleDateString();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const datesInCurrentMonth = Array.from(
    {
      length: new Date(currentYear, currentMonth + 1, 0).getDate(),
    },
    (_, i) => {
      const newDate = new Date(currentYear, currentMonth, i + 1);
      const day = newDate.getDay();
      const date = newDate.getDate();
      return {
        date: date.toString().padStart(2, '0'),
        fullDate: newDate.toLocaleDateString(),
        isWeekend: day === 0 || day === 6,
      };
    }
  );
  return (
    <Styled.LogContainer>
      <h2>{new Date().toLocaleString('default', { month: 'long' })}</h2>
      <Styled.Log>
        {datesInCurrentMonth.map((date) => {
          const logEntry = pomodoroLog.find(
            (entry) => entry.date === date.fullDate
          );
          return (
            <Styled.LogEntry isWeekend={date.isWeekend} key={date.fullDate}>
              <div>{date.date}</div>
              <Styled.CircleContainer>
                {logEntry &&
                  Array(logEntry.count)
                    .fill(0)
                    .map((_, i) => <Styled.Circle key={`circle-${i}`} />)}
                {isInProgress && date.fullDate === today && (
                  <Styled.Circle inProgress />
                )}
              </Styled.CircleContainer>
            </Styled.LogEntry>
          );
        })}
      </Styled.Log>
    </Styled.LogContainer>
  );
};

export default Log;
