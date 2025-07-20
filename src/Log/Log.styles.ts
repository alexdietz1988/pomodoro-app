import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;

  h2 {
    font-size: 1.15rem;
    margin-block-end: 1rem;
  }
`;

export const Log = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogEntry = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isWeekend',
})<{
  isWeekend?: boolean;
}>`
  color: ${(props) => (props.isWeekend ? 'pink' : 'inherit')};
  display: flex;
  align-items: start;
  gap: 0.5rem;
`;

export const Date = styled.div`
  line-height: 1;
`;

const TALLY_WIDTH = '1rem';
const TALLY_GAP = '0.1rem';

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
