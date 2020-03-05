import { addParameters, storiesOf } from "@storybook/react";
import React from "react";
import _ from "lodash";

import AppReactLive from "src/components/editor/AppReactLive";
import WebReactLive from "src/components/editor/WebReactLive";

storiesOf("ReactLive", module)
  .add("App ReactLive", () => <AppReactLive />)
  .add("Web ReactLive", () => <WebReactLive />);
