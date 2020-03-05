import React from "react";
import { compose } from "recompose";

import "src/styles/global.css";

export const wrapPageElement = ({ element }) => {
  return element;
};

export const wrapRootElement = ({ element }) => {
  const enhanceElement = compose()(element);
  
  return enhanceElement;
};
