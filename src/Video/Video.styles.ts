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
  color: white;
  font-size: 0.75rem;
`;

export const DialogCloseButton = styled.button``;