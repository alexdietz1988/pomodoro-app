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

export const TimerContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Timer = styled.div`
  border-radius: 1rem;
  text-align: center;
  padding: 1.5rem;
  background-color: hsl(0, 100%, 62%);

  div {
    font-size: 5rem;
    color: hsl(0, 0%, 10%);
  }

  button {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    background-color: white;
    color: black;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const LogContainer = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;

  h2 {
    font-size: 1.15rem;
    margin-block-end: 1rem;
  }
`;

export const Log = styled.div`
  height: 22rem;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const LogEntry = styled.div<{ isWeekend?: boolean }>`
  color: ${(props) => (props.isWeekend ? 'pink' : 'inherit')};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CircleContainer = styled.div`
  display: flex;
  gap: 0.1rem;
`;

export const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: hsl(0, 100%, 62%);
`;

export const Iframe = styled.iframe`
  border: none;
  width: 100%;
  height: 400px;
`;
