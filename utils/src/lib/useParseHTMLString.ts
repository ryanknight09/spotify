export const useParseHTMLString = () => {
  const parseHTML = (htmlString: string) => {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(htmlString, 'text/html');
    return parsedHTML.body;
  };

  return { parseHTML };
};
