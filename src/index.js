import React, { PureComponent } from "react";
import "./transition.css";
import PropTypes from "prop-types";
import { tryCatch,safeProp} from 'fp-small'
/**
 * A Helper class to extract single Element
 * @param {PropTypes.element} children
 * @param {object} props
 * @returns {ReactNode}
 */
const getTransitionElement = (children, props = {}) => {
  return tryCatch(React.Children.only, children)
    .map(x => x)
    .fold(
      () => ({ valid: false, elem: children }),
      x => ({ valid: true, elem: x })
    );
};

const getPropFromEvents = (events, event, prop) => {
  return safeProp(event, events)
    .map(safeProp(prop))
    .chain(x => x)
    .fold(() => "", x => x);
};

/**
 * A Component that adds transition to it's Children on Mount and UnMount
 * @class Transition
 */
export default class Transition extends PureComponent {
  // Mount Flag
  mount = false;
  //   Reference to children
  ref = React.createRef();
  // PropTypes
  static propTypes = {
    children: PropTypes.element.isRequired,
    onTransitionEnd: PropTypes.func,
    eventHandlers: PropTypes.objectOf(
      PropTypes.shape({
        className: PropTypes.string,
        style: PropTypes.object
      })
    ),
    event: PropTypes.string,
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    timingFunction: PropTypes.string
  };
  transitionEndHandler = e => {
    this.props.onTransitionEnd &&
      this.props.onTransitionEnd(this.emittedEvent || this.props.event, e);
    this.emittedEvent = "";
  };

  emittedEvent = "";
  componentDidMount() {
    this.mount = true;
    if (this.props.listenToEvents && this.ref.current) {
      Object.entries(this.props.eventHandlers).map((x, i) => {
        this.ref.current.addEventListener(x[0], e => {
          this.emittedEvent = x[0];
          const { style = {} } = x[1];
          for (let name in style) {
            this.ref.current.style[name] = style[name];
          }
        });
        return x;
      });
    }
  }

  // componentWillUnmount() {
  //   const node = this.ref.current;
  //   if (node) {
  //     node.removeEventListener("animationend", this.transitionEndHandler);
  //     node.removeEventListener("transitionend", this.transitionEndHandler);
  //   }
  // }

  /**
   * Adding Transition when Mounted
   * @method onMount
   */
  onMount() {}

  /**
   * Adding Transition when Un Mounting
   * @method onUnMount
   */
  onUnMount() {}

  render() {
    const {
      children,
      eventHandlers = {},
      event,
      delay = 0,
      duration = "1s",
      timingFunction = "ease",
      animationFillMode = "forwards",
      property = "none",
      ...otherProps
    } = this.props;

    const {
      valid,
      elem,
      elem: {
        props: { className: elemClassName = "", style: elemStyle = {} }
      }
    } = getTransitionElement(children, otherProps);
    const className = getPropFromEvents(
      eventHandlers,
      !this.mount ? "mount" : event,
      "className"
    );

    let style = {
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
        eventHandlers,
        event ? event : !this.mount ? "mount" : "",
        "style"
      ) || {})
    };

    return valid ? (
      <elem.type
        {...elem.props}
        style={style}
        className={elemClassName + " transition " + className}
        onAnimationEnd={this.transitionEndHandler}
        onTransitionEnd={this.transitionEndHandler}
        ref={this.ref}
      />
    ) : (
      elem
    );
  }
}
