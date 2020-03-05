import { PageRendererProps } from "gatsby";
import { inject, observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

import RNText from "@shared/components/text/RNText";
import ListLoading from "@shared/components/loading/ListLoading";

import Layout from "src/components/common/Layout";
import SEO from "src/components/common/SEO";

interface IProps extends PageRendererProps {
  // TODO
}

class IndexPage extends React.Component<IProps> {
  public render() {
    return (
      <Layout>
        <ListLoading />
        <RNText>RNText Shared</RNText>
      </Layout>
    );
  }
}

export default IndexPage;
