import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <ReactComponent />
      <Text>Farm products</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Farm products</Text>
    </StyledLogo>
  );
}

export default Logo;
