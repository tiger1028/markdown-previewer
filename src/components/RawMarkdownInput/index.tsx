import React from "react";
import { Container, RawMarkdownInput } from "./style";

interface RawMarkdownInputComponent {
  value: string;
  onChange: (value: string) => void;
}

export const RawMarkdownInputComponent: React.FC<RawMarkdownInputComponent> = ({
  value,
  onChange,
}) => {
  const onRawMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <h3>Please input text below you want to convert to Markdown!</h3>
      <RawMarkdownInput value={value} onChange={onRawMarkdownChange} />
    </Container>
  );
};
