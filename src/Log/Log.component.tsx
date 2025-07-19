import * as Styled from './Log.styles';
import { type PomodoroLogEntry } from '../App';

const Log = ({ pomodoroLog }: { pomodoroLog: PomodoroLogEntry[] }) => {
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
                    .map(() => <Styled.Circle />)}
              </Styled.CircleContainer>
            </Styled.LogEntry>
          );
        })}
      </Styled.Log>
    </Styled.LogContainer>
  );
};

export default Log;
