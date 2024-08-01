import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { RawMarkdownInputComponent } from "./components";
import { RawMarkdownManager } from "./utils";
import {
  Container,
  MarkdownContainer,
  MarkdownInputContainer,
} from "./App.style";

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
    <Container>
      <RawMarkdownInputComponent
        value={rawMarkdown}
        onChange={onRawMarkdownChange}
      />
      <MarkdownContainer>
        <h3>MD Preview</h3>
        <MarkdownInputContainer>{debouncedRawMarkdown}</MarkdownInputContainer>
      </MarkdownContainer>
    </Container>
  );
};
