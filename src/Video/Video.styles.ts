import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;
`;

export const Iframe = styled.iframe`
  border: none;
  border-radius: 0.5rem;
  aspect-ratio: 16 / 9;
  width: 100%;
`;

export const SwitchVideoButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const VideoOptionsDialog = styled.dialog`
  background-color: var(--color-bg);
  border-radius: 0.5rem;
  color: white;

  button {
    font-size: 0.9rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    padding-inline: 0.25rem;
    text-align: start;

    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
`;

export const VideoOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 0.75rem;
  margin-block-end: 1rem;
`;

export const DialogCloseButton = styled.button`
  opacity: 0.75;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`;
