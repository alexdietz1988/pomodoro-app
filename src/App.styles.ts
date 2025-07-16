import styled from 'styled-components';

export const Timer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  display: inline-block;
  padding: 1.5rem;
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
