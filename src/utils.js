import { safeProp } from "fp-small";

export const getPropFromEvents = (events, event, prop) => {
  return safeProp(event, events)
    .map(safeProp(prop))
    .chain(x => x)
    .fold(() => "", x => x);
};

export const extractProps = (props, mounted = true) => {
  const {
    children: {
      props: childProps,
      props: { className: elemClassName = "", style: elemStyle = {} },
      type: Child
    },
    eventHandlers = {},
    event,
    delay = 0,
    duration = "1s",
    timingFunction = "ease",
    animationFillMode = "forwards",
    property = "all",
    mount = {},
    unmount = {},
    ...otherProps
  } = props;
  const mergedEvent = { mount: mount, unmount: unmount, ...eventHandlers };
  const transStyle = {
    ...elemStyle,
    animationDuration: duration,
    transitionDuration: duration,
    animationDelay: delay,
    transitionDelay: delay,
    transitionTimingFunction: timingFunction,
    animationTimingFunction: timingFunction,
    transitionProperty: property,
    animationFillMode,
    ...(getPropFromEvents(
      mergedEvent,
      event ? event : mounted ? "mount" : "",
      "style"
    ) || {})
  };
  const transClass =
    getPropFromEvents(
      mergedEvent,
      event ? event : mounted ? "mount" : "",
      "className"
    ) +
    " " +
    elemClassName;

  return {
    Child,
    transStyle,
    transClass,
    childProps: { ...childProps, ...otherProps },
    eventHandlers: mergedEvent
  };
};
  