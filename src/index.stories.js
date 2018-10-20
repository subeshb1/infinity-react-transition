import React from "react";

import { storiesOf } from "@storybook/react";

import Transition from ".";

storiesOf("Button", module).add("with Transition", () => {
  return (
    <Transition
    eventHandlers={{
        mount:{
            style:{
                animationName:"t-zoom-in"
            }
        }
    }}
    > 
      <div>Subesh</div>
    </Transition>
  );
});
