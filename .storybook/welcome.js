import React from "react";
import "./index.css";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Transition from "../src";

import { setOptions } from "@storybook/addon-options";

import { themes } from "@storybook/components";

setOptions({
  theme: { ...themes.dark }
});

storiesOf("Welcome", module).add(
  "to Infinity React Transition",
  withInfo()(() => {
    return (
      <div style={{ overflow: "hidden" }}>
        <Transition
          mount={{
            style: {
              textAlign: "center",
              animationName: "t-zoom-in"
            }
          }}
        >
          <h1>Welcome to Infinity React Transition</h1>
        </Transition>
        <Transition
          mount={{
            style: {
              textAlign: "center",
              animationName: "t-slide-right"
            }
          }}
        >
          <h2>Click Show more to view API</h2>
        </Transition>
      </div>
    );
  })
);
