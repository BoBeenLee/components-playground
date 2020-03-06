import { PageRendererProps } from "gatsby";
import React from "react";

import WebReactLive from "src/components/editor/WebReactLive";

import Layout from "src/components/common/Layout";

class IndexPage extends React.Component<PageRendererProps> {
  public render() {
    return (
      <Layout>
        <WebReactLive />
      </Layout>
    );
  }
}

export default IndexPage;
