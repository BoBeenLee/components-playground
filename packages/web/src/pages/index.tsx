import { PageRendererProps } from "gatsby";
import React from "react";

import RNText from "@shared/components/text/RNText";
import ReactLive from "src/components/ReactLive";

import Layout from "src/components/common/Layout";

class IndexPage extends React.Component<PageRendererProps> {
  public render() {
    return (
      <Layout>
        <ReactLive />
      </Layout>
    );
  }
}

export default IndexPage;
