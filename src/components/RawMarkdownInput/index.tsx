import React from "react";
import { RawMarkdownInput } from "./style";

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

  return <RawMarkdownInput value={value} onChange={onRawMarkdownChange} />;
};
