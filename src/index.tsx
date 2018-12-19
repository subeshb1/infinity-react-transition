import * as React from "react";
import "./transition.css";

export interface IUITransitionEvent {
  className?: string;
  style?: React.CSSProperties;
}
export interface TransitionProps {
  children: React.ReactElement<React.HTMLAttributes<any>>;
  onTransitionEnd?(
    event: React.TransitionEvent | React.AnimationEvent,
    eventName: string
  ): void;
  transition?: {
    [event: string]: IUITransitionEvent;
  };
  event?: string;
  mount?: IUITransitionEvent;
  unmount?: IUITransitionEvent;
  duration?: string;
  delay?: string;
  property?: string;
  timingFunction?: string;
  style?: React.CSSProperties;
  animationFillMode: string;

}

export class Transition extends React.Component<TransitionProps, any> {
  mount: boolean = false;
  static defaultProps = {
    delay: "0s",
    duration: "1s",
    timingFunction: "ease",
    property: "all",
    animationFillMode: "forwards",
    mount: {},
    unmount: {},
    style:{}
  };

  componentDidMount = () => {
    this.mount = true;
  };

  transitionEndHandler = (e: React.TransitionEvent | React.AnimationEvent) => {
    if (this.props.onTransitionEnd)
      this.props.onTransitionEnd(e, this.props.event || "mount");
  };

  public render() {
    // Making Sure only one Child is Passed
    React.Children.only(this.props.children);
    const { Child, childProps, transClass="", transStyle } = extractProps(
      this.props,
      this.mount
    );

    return (
      <Child
        {...childProps}
        className={transClass}
        style={transStyle as React.CSSProperties}
        onAnimationEnd={this.transitionEndHandler}
        onTransitionEnd={this.transitionEndHandler}
      />
    );
  }
}

export const getPropFromEvents = (
  events: { [index: string]: IUITransitionEvent },
  event: string
): IUITransitionEvent => {
  let obj = { style: {}, className: "" } as IUITransitionEvent;
  if (event in events) {
    obj = events[event];
  }
  return obj;
};

function extractProps(props: TransitionProps, mounted: boolean) {
  console.log(mounted)
  const {
    children: {
      props: childProps,
      props: { className: elemClassName = "", style: elemStyle = {} },
      type: Child
    },
    transition = {},
    event,
    delay = 0,
    duration = "1s",
    timingFunction = "ease",
    animationFillMode="forwards",
    property = "all",
    mount = {},
    style:extraStyles = {},
    unmount = {},
    ...otherProps
  } = props;
  const mergedEvent = { mount: mount, unmount: unmount, ...transition };
  const { style, className="" } = getPropFromEvents(
    mergedEvent,
    event ? event : !mounted ? "mount" : ""
  );
  const transStyle = {
    ...elemStyle,
    animationDuration: duration,
    transitionDuration: duration,
    animationDelay: delay,
    transitionDelay: delay,
    animationFillMode,
    transitionTimingFunction: timingFunction,
    animationTimingFunction: timingFunction,
    transitionProperty: property,
    ...extraStyles,
    ...style
  };
  const transClass = className + " " + elemClassName;

  return {
    Child,
    transStyle,
    transClass,
    childProps: { ...childProps, ...otherProps },
    eventHandlers: mergedEvent
  };
}
