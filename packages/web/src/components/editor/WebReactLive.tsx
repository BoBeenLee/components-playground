import React from "react";
import styled, { css } from "styled-components";

import ReactLive, {
  commonCode,
  commonScope
} from "src/components/editor/ReactLive";

const webCode = `
const Container = styled.div\`\`;
${commonCode}
`;

const webScope = { ...commonScope, styled, css };

const WebReactLive = () => {
  return <ReactLive scope={webScope} code={webCode} />;
};

export default WebReactLive;
