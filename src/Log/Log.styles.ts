import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 50%;

  h2 {
    font-size: 1.15rem;
    margin-block-end: 1rem;
  }
`;

export const Log = styled.div`
  border: 1px solid hsl(0, 50%, 62%);
  border-radius: 0.5rem;
  padding: 0.5rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const LogEntry = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isWeekend',
})<{
  isWeekend?: boolean;
}>`
  color: ${(props) => (props.isWeekend ? 'pink' : 'inherit')};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CircleContainer = styled.div`
  display: flex;
  gap: 0.1rem;
`;

export const Circle = styled.div<{ inProgress?: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: hsl(0, 100%, 62%);

  @keyframes fadeIn {
    from {
      opacity: 0.25;
    }
    to {
      opacity: 0.75;
    }
  }

  ${(props) =>
    props.inProgress &&
    css`
      background-color: hsl(0, 100%, 60%);
      animation: fadeIn 1s ease-in-out alternate infinite;
    `}
`;
