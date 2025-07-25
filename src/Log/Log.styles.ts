import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;

  h2 {
    font-size: 1.15rem;
    margin-block-end: 1rem;
  }
`;

const TALLY_GAP = '0.1rem';

export const Log = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const LogEntry = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isWeekend',
})<{
  isWeekend?: boolean;
}>`
  color: ${(props) => (props.isWeekend ? 'pink' : 'inherit')};
  display: flex;
  align-items: start;
`;

export const Date = styled.div`
  margin-inline-end: 0.5rem;
  line-height: 1;
`;

const TALLY_WIDTH = '1rem';

export const TallyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${TALLY_GAP};
  width: calc(${TALLY_WIDTH} * 4 + ${TALLY_GAP} * 4);
`;

export const Tally = styled.div<{ inProgress?: boolean }>`
  width: ${TALLY_WIDTH};
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

export const TodayIndicator = styled.div<{ show?: boolean }>`
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 0.3rem;
    aspect-ratio: 1;
    background-color: ${(props) =>
      props.show ? 'hsl(0, 100%, 62%)' : 'transparent'};
    border-radius: 50%;
  }
`;

export const ResetFields = styled.div`
  margin-block-start: 0.5rem;
  font-size: 0.75rem;
  color: hsl(0, 0%, 50%);
`;

export const ResetButton = styled.button`
  &:hover {
    color: hsl(0, 0%, 80%);
  }
`;

export const ConfirmResetFields = styled.div`
  & > div:last-child {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-block-start: 0.5rem;
  }

  button {
    border-radius: 0.25rem;
    padding: 0.3rem;
    color: white;
  }

  button:first-child {
    background-color: hsl(0, 100%, 62%);
  }

  button:last-child {
    background-color: hsl(0, 0%, 50%);
  }
`;
