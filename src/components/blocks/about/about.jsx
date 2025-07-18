import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Text, StyledAbout } from "./styles";

function About() {
  return (
    <StyledAbout>
      <Title size={TitleSize.BIG}>
        Farm Products Store with Delivery
      </Title>
      <Text>
        All products are made to order. Farmers start preparing the products the day before the order is shipped to customers. That’s why we accept orders in advance and deliver the products as fresh as possible.
      </Text>
    </StyledAbout>
  );
}

export default About;
