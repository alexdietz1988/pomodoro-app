import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin-inline: auto;
  padding: 2rem;

  text-align: center;
  font-family: 'Roboto Mono', monospace;

  h1 {
    margin-block-end: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TimerAndVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
