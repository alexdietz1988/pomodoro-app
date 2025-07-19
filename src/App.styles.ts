import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TimerAndLog = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  & > div {
    flex: 1;
    padding: 1.5rem;
  }
`;

export const Timer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: red;

  div {
    font-size: 5rem;
    color: hsl(0, 0%, 10%);
  }

  button {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    background-color: white;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const Log = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const LogEntry = styled.div<{ isWeekend?: boolean }>`
  color: ${(props) => (props.isWeekend ? 'pink' : 'black')};
`;

export const Iframe = styled.iframe`
  border: none;
  width: 100%;
  height: 400px;
`;
