'use client';

import React, { useState, useEffect } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useEffect(() => {
    // This will ensure the server-side styles are generated and added to the stylesheet
    styledComponentsStyleSheet.collectStyles(children);

    // Clean up the server-side styles when the component unmounts
    return () => styledComponentsStyleSheet.instance.clearTag();
  }, [children]);

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

