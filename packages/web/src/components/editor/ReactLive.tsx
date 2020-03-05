import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled, { css } from "styled-components";
import styledNative from "styled-components/native";
import _ from "lodash";
import moment from "moment";
import numeral from "numeral";

import { reactLiveHome } from "src/styles/reactLiveTheme";

interface IProps {
  scope: object;
  code: string;
}

export const commonCode = `
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

export const commonScope = { _, moment, numeral };

const StyledProvider = styled(LiveProvider)``;

const LiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: #42374a;
  font-family: "Source Code Pro", monospace;
  font-size: 14px;
  line-height: 1.4;
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 3px;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  height: 200px;
  background: #ff5555;
  color: #f8f8f2;
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: "Source Code Pro", monospace;
  overflow: auto;
`;

const ReactLive = (props: IProps) => {
  const { scope, code } = props;
  return (
    <StyledProvider
      scope={scope}
      code={code}
      noInline={true}
      theme={reactLiveHome}
    >
      <LiveWrapper>
        <StyledEditor>
          <LiveEditor />
        </StyledEditor>
        <StyledPreview />
      </LiveWrapper>
      <StyledError />
    </StyledProvider>
  );
};

export default ReactLive;
