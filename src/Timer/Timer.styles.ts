import styled from 'styled-components';
import { default as BootstrapButton } from 'react-bootstrap/Button';

export const Timer = styled.div`
  border-radius: 1rem;
  text-align: center;
  padding: 1.5rem;

  div {
    font-size: 5rem;
  }
`;

export const Button = styled(BootstrapButton)`
  background-color: hsl(0, 75%, 50%);
  border: none;
  color: hsl(0, 0%, 100%);

  svg {
    display: block;
    width: 1rem;
    height: 1rem;
  }

  --bs-btn-active-bg: hsl(0, 75%, 40%);

  &:hover {
    background-color: var(--bs-btn-active-bg);
  }
`;
