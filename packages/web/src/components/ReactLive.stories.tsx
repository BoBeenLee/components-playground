import { addParameters, storiesOf } from "@storybook/react";
import React from "react";

import ReactLive from "src/components/ReactLive";

storiesOf("ReactLive", module).add("ReactLive", () => <ReactLive />);

addParameters({
  options: {
    showPanel: false
  }
});
