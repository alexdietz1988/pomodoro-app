import styled from 'styled-components';

export const LogContainer = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;

  h2 {
    font-size: 1.15rem;
    margin-block-end: 1rem;
  }
`;

export const Log = styled.div`
  height: 22rem;

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

export const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: hsl(0, 100%, 62%);
`;
