import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { useDebounce } from "use-debounce";
import { RawMarkdownInputComponent } from "./components";
import { RawMarkdownManager } from "./utils";

const RAW_MARKDOWN_DEBOUNCE_TIMEOUT = 300;

export const App: React.FC = () => {
  const [rawMarkdown, setRawMarkdown] = useState<string>("");
  const [debouncedRawMarkdown] = useDebounce(
    rawMarkdown,
    RAW_MARKDOWN_DEBOUNCE_TIMEOUT
  );

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
      <Markdown>{debouncedRawMarkdown}</Markdown>
    </div>
  );
};
