import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { RawMarkdownInputComponent } from "./components";
import { RawMarkdownManager } from "./utils";

export const App: React.FC = () => {
  const [rawMarkdown, setRawMarkdown] = useState<string>("");

  useEffect(() => {
    setRawMarkdown(RawMarkdownManager.getFromLocalStorage());
  }, []);

  const onRawMarkdownChange = (value: string) => {
    setRawMarkdown(value);
    RawMarkdownManager.saveToLocalStorage(value);
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
