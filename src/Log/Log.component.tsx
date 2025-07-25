import { useState } from 'react';
import * as Styled from './Log.styles';
import { type PomodoroLogEntry } from '../App';

interface LogProps {
  pomodoroLog: PomodoroLogEntry[];
  isInProgress: boolean;
  resetLog: () => void;
}

const Log = ({ pomodoroLog, isInProgress, resetLog }: LogProps) => {
  const today = new Date().toLocaleDateString();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const [selectedDates, setSelectedDates] = useState({
    month: currentMonth,
    year: currentYear,
  });
  const { month, year } = selectedDates;

  const datesInMonth = Array.from(
    {
      length: new Date(year, month + 1, 0).getDate(),
    },
    (_, i) => {
      const newDate = new Date(year, month, i + 1);
      const day = newDate.getDay();
      const date = newDate.getDate();
      return {
        date: date.toString().padStart(2, '0'),
        fullDate: newDate.toLocaleDateString(),
        isWeekend: day === 0 || day === 6,
      };
    }
  );
  const [readyToReset, setReadyToReset] = useState(false);
  const handleReset = () => {
    resetLog();
    setReadyToReset(false);
  };

  const initiateResetButton = (
    <Styled.ResetButton onClick={() => setReadyToReset(true)}>
      Reset Log
    </Styled.ResetButton>
  );
  const confirmResetFields = (
    <Styled.ConfirmResetFields>
      <div>Are you sure?</div>
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => setReadyToReset(false)}>Never Mind</button>
      </div>
    </Styled.ConfirmResetFields>
  );

  const handleChangeMonth = (direction: 'next' | 'prev') => {
    setSelectedDates((prev) => {
      const newMonth = direction === 'next' ? prev.month + 1 : prev.month - 1;
      const newYear =
        newMonth < 0
          ? prev.year - 1
          : newMonth > 11
          ? prev.year + 1
          : prev.year;
      return { month: (newMonth + 12) % 12, year: newYear };
    });
  };

  return (
    <Styled.Container>
      <h2>
        <button onClick={() => handleChangeMonth('prev')}>{'<'}</button>
        <span>
          {(month + 1).toString().padStart(2, '0')}/{year.toString().slice(-2)}
        </span>
        {!(month === currentMonth && year === currentYear) ? (
          <Styled.ChangeMonthButton onClick={() => handleChangeMonth('next')}>
            {'>'}
          </Styled.ChangeMonthButton>
        ) : (
          <Styled.ChangeMonthButton isHidden={true}>
            {'>'}
          </Styled.ChangeMonthButton>
        )}
      </h2>
      <Styled.Log>
        {datesInMonth.map((date) => {
          const logEntry = pomodoroLog.find(
            (entry) => entry.date === date.fullDate
          );
          return (
            <Styled.LogEntry isWeekend={date.isWeekend} key={date.fullDate}>
              <Styled.TodayIndicator show={date.fullDate === today}>
                <div />
              </Styled.TodayIndicator>
              <Styled.Date>{date.date}</Styled.Date>
              <Styled.TallyContainer>
                {logEntry &&
                  Array(logEntry.count)
                    .fill(0)
                    .map((_, i) => (
                      <Styled.Tally key={`tally-${date.date}-${i}`} />
                    ))}
                {isInProgress && date.fullDate === today && (
                  <Styled.Tally inProgress />
                )}
              </Styled.TallyContainer>
            </Styled.LogEntry>
          );
        })}
        <Styled.ResetFields>
          {readyToReset ? confirmResetFields : initiateResetButton}
        </Styled.ResetFields>
      </Styled.Log>
    </Styled.Container>
  );
};

export default Log;
