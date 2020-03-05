import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled, { css } from "styled-components";
import * as polished from "polished";
import { reactLiveHome } from "src/styles/reactLiveTheme";

const scope = { styled };

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
`;

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
  background: ${polished.darken(0.06, "#42374a")};
  font-family: "Source Code Pro", monospace;
  font-size: ${polished.rem(14)};
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  height: 200px;
  padding: ${polished.rem(8)};
  background: #ff5555;
  color: #f8f8f2;
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: "Source Code Pro", monospace;
  overflow: auto;
`;

const code = `
const Container = styled.div\`\`;

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

const ReactLive = () => {
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
