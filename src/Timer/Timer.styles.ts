import styled from 'styled-components';

export const Timer = styled.div`
  border-radius: 1rem;
  text-align: center;
  padding: 1.5rem;

  div {
    font-size: 5rem;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  svg {
    display: block;
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;
