import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ children, features }) {
  return (
    <>
      <Header />
      <Main>
        <Order/>
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
