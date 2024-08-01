import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RawMarkdownInput = styled.textarea`
  width: 100%;
  height: 100%;

  padding: 8px;

  border: 1px solid black;

  resize: none;
`;
