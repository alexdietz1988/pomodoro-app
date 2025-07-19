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
