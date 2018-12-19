import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import { Transition } from "../src/index";
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Transition
      onTransitionEnd={action("onTransitionEnd")}
      transition={{
        mount: {
          className: "execute"
        }
      }}
    >
      <div className="init">Hello</div>
    </Transition>
  ))
  .add("with some emojis", () => (
    <Transition
      onTransitionEnd={action("onTransitionEnd")}
      transition={{
        mount: {
          style: {
            animationName: "t-slide-right",
            animationFillMode: "forwards"
          }
        }
      }}
    >
      <div>Hello</div>
    </Transition>
  ));
