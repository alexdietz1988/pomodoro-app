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
`;

export const SwitchVideoButtons = styled.div`
  width: 75%;
  display: flex;
  gap: 1rem;

  & > * {
    flex: 1;
    padding-inline: 0.25rem;
  }

  & > select {
    --bs-form-select-bg-img: none;
    background-color: transparent;
    color: white;
    text-align: center;
    max-width: 30ch;
    text-overflow: ellipsis;
  }
`;
