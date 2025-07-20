import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  h1 {
    margin-block-end: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ColumnOne = styled.div`
  flex: 5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ColumnTwo = styled.div`
  flex: 1;
`;
