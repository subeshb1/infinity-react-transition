import React from "react";
import { tryCatch, safeProp } from "fp-small";
/**
 * A Helper class to extract single Element
 * @param {PropTypes.element} children
 * @param {object} props
 * @returns {ReactNode}
 */
export const getTransitionElement = (children, props = {}) => {
  return tryCatch(React.Children.only, children)
    .map(x => x)
    .fold(
      () => ({ valid: false, elem: children }),
      x => ({ valid: true, elem: x })
    );
};

export const getPropFromEvents = (events, event, prop) => {
  return safeProp(event, events)
    .map(safeProp(prop))
    .chain(x => x)
    .fold(() => "", x => x);
};
