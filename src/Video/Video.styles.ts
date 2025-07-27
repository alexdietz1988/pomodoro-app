import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;

  button {
    border: 1px solid white;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;

    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
`;

export const Iframe = styled.iframe`
  border: none;
  border-radius: 0.5rem;
  aspect-ratio: 16 / 9;
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const VideoTypeButton = styled.button<{ isActive?: boolean }>`
  line-height: 1;

  svg {
    vertical-align: middle;
  }
  &:first-child {
    border-end-end-radius: 0;
    border-start-end-radius: 0;
    border-right-width: 0.5px;
  }
  &:last-child {
    border-end-start-radius: 0;
    border-start-start-radius: 0;
    border-left-width: 0.5px;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: hsl(0, 0%, 90%);
      color: black;
    `}
`;

export const SwitchVideoButtons = styled.div`
  display: flex;
  gap: 0.25rem;
  font-size: 0.9rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const VideoOptionsDialog = styled.dialog`
  background-color: var(--color-bg);
  border-radius: 0.5rem;
  color: white;
`;

export const VideoOptions = styled.div`
  & > button {
    display: block;
    margin-block-end: 0.5rem;
    text-align: start;
  }
`;

export const DialogCloseButton = styled.button`
  opacity: 0.75;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`;

export const VideoInputForm = styled.form`
  font-size: 0.9rem;
  display: flex;

  input {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    border-end-end-radius: 0;
    border-start-end-radius: 0;
    background-color: inherit;
    color: white;
    border: 1px solid white;
    border-right-width: 0.5px;
    font-family: inherit;
  }
  button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-left-width: 0.5px;
    padding-block: 0.25rem;
  }
`;

export const VideoInputCloseButton = styled.div`
  opacity: 0.5;
  font-size: 0.8rem;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
