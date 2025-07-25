import styled from 'styled-components';

export const Container = styled.div`
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
  column-gap: 2rem;
`;

export const ColumnOne = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 25rem;
`;

export const ColumnTwo = styled.div`
`;
