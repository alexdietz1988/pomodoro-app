import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 1.5rem;

  & > div {
    height: 6.5rem;
  }
`;

export const Timer = styled.div`
  font-size: 5rem;
  line-height: 1;
  height: 6.5rem;
`;

export const CompletionMessage = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-block: 0.5rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h2 {
    opacity: 0;
    font-size: 1.5rem;
    animation: fadeIn 1s forwards;
    animation-delay: 2s;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-block-start: 1rem;

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
