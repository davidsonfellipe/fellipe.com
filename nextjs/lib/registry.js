import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useEffect(() => {
    // This will ensure the server-side styles are generated and added to the stylesheet
    styledComponentsStyleSheet.collectStyles(children);
  }, [children]);

  useEffect(() => {
    // On the client-side, clear any server-side styles and remove them from the DOM
    styledComponentsStyleSheet.instance.clearTag();
  }, []);

  if (typeof window !== 'undefined') {
    // On the client-side, return the children directly without server-side rendering
    return <>{children}</>;
  }

  // On the server-side, return the styles wrapped in StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
