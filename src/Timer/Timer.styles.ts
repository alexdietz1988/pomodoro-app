import styled from 'styled-components';

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
