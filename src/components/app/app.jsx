import React from "react";
import PageWrapper from "../layout/page-wrapper/page-prapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features} products={products}>Контент страницы</PageWrapper>
    </>
  );
}
