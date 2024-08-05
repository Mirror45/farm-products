import React from "react";
import PageWrapper from "../layout/page-wrapper/page-prapper";
import features from "/src/mocks/features";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features}>Контент страницы</PageWrapper>
    </>
  );
}
