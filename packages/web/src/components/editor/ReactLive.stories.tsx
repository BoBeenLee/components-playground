import { addParameters, storiesOf } from "@storybook/react";
import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import moment from "moment";
import numeral from "numeral";

import AppReactLive from "src/components/editor/AppReactLive";
import WebReactLive from "src/components/editor/WebReactLive";

storiesOf("ReactLive", module)
  .add("App ReactLive", () => <AppReactLive />)
  .add("Web ReactLive", () => <WebReactLive />);

addParameters({
  options: {
    showPanel: false
  }
});
