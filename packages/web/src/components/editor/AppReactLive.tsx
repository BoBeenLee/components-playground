import React from 'react';
import styledNative, { css as cssNative } from "styled-components/native";

import ReactLive, { commonCode, commonScope } from "src/components/editor/ReactLive";

const appCode = `
const Container = styled.View\`\`;
${commonCode}
`;

const appScope = { ...commonScope, styled: styledNative, css: cssNative };

const AppReactLive = () => {
    return (
        <ReactLive scope={appScope} code={appCode} />
    );
};

export default AppReactLive;