import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import { RawMarkdownInputComponent } from "./components";

export const App: React.FC = () => {
  const [rawMarkdown, setRawMarkdown] = useState<string>("");

  const onRawMarkdownChange = (value: string) => {
    setRawMarkdown(value);
  };

  return (
    <div>
      <RawMarkdownInputComponent
        value={rawMarkdown}
        onChange={onRawMarkdownChange}
      />
      <Markdown>{rawMarkdown}</Markdown>
    </div>
  );
};
