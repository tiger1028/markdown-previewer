import styled from "styled-components";
import Markdown from "markdown-to-jsx";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 24px;
  padding: 24px;
`;

export const MarkdownContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MarkdownInputContainer = styled(Markdown)`
  height: 100%;

  padding: 8px;

  border: 1px solid black;

  background-color: lightgray;

  cursor: not-allowed;
`;
