import { addParameters, storiesOf } from "@storybook/react";
import React from "react";
import styled, { css } from "styled-components";
import styledNative, { css as cssNative } from "styled-components/native";
import _ from "lodash";
import moment from "moment";
import numeral from "numeral";

import ReactLive from "src/components/ReactLive";

const commonCode = `
class Counter extends React.Component {
    constructor() {
      super()
      this.state = { count: 0 }
    }
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(state => ({ count: state.count + 1 }))
      }, 1000)
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }
    render() {
      return (
        <Container>
          <h3>
            {this.state.count}
          </h3>
        </Container>
      )
    }
  }
  render(<Counter />);
`;

const appCode = `
const Container = styled.View\`\`;
${commonCode}
`;

const webCode = `
const Container = styled.div\`\`;
${commonCode}
`;

const commonScope = { _, moment, numeral };

const appScope = { ...commonScope, styled: styledNative, css: cssNative };

const webScope = { ...commonScope, styled, css };

storiesOf("ReactLive", module)
  .add("App ReactLive", () => <ReactLive scope={appScope} code={appCode} />)
  .add("Web ReactLive", () => <ReactLive scope={webScope} code={webCode} />);

addParameters({
  options: {
    showPanel: false
  }
});
