export const getFromLocalStorage = (): string => {
  return localStorage.getItem("rawMarkdown") ?? "";
};

export const saveToLocalStorage = (rawMarkdown: string) => {
  localStorage.setItem("rawMarkdown", rawMarkdown);
};
