import React from "react";
import "./transition.css";
import PropTypes from "prop-types";

import { extractProps } from "./utils";

/**
 * A Component that adds transition to it's Children on Mount and UnMount
 * You can also add custom events
 * @class Transition
 */
export default class Transition extends React.PureComponent {
  // Mount Flag
  mount = false;
  emittedEvent = "";
  //   Reference to children
  ref = React.createRef();
  // PropTypes
  static propTypes = {
    /** Single Child*/
    children: PropTypes.element.isRequired,
    /** Callback once an animation or transition ends*/
    onTransitionEnd: PropTypes.func,
    /** event handlers */
    eventHandlers: PropTypes.objectOf(
      PropTypes.shape({
        className: PropTypes.string,
        style: PropTypes.object
      })
    ),
    /** Custom Event*/
    event: PropTypes.string,
    /**  Animation or transition duration*/
    duration: PropTypes.string,
    /**  Timing function*/
    timingFunction: PropTypes.string,
    /** Delay the transition or animation*/
    delay: PropTypes.string,
    /** Handler for Mount Event */
    mount: PropTypes.shape({
      className: PropTypes.string,
      style: PropTypes.object
    }),
    /** Handler for unMount Event */
    unmount: PropTypes.shape({
      className: PropTypes.string,
      style: PropTypes.object
    }),
    /** the properties that can be transitioned or animated */
    property: PropTypes.string
  };

  static defaultProps = {
    eventHandlers: {},
    delay: "0s",
    duration: "1s",
    timingFunction: "ease",
    animationFillMode: "forwards",
    property: "all",
    mount: {},
    unmount: {}
  };
  componentDidMount = () => {
    this.mount = true;
  };

  transitionEndHandler = e => {
    this.props.onTransitionEnd &&
      this.props.onTransitionEnd(this.emittedEvent || this.props.event, e);
    this.emittedEvent = "";
  };

  render() {
    // Making Sure only one Child is Passed
    React.Children.only(this.props.children, this.mount);
    const { Child, childProps, transClass, transStyle } = extractProps(
      this.props
    );

    return (
      <Child
        {...childProps}
        className={transClass}
        style={transStyle}
        onAnimationEnd={this.transitionEndHandler}
        onTransitionEnd={this.transitionEndHandler}
        ref={this.ref}
      />
    );
  }
}
