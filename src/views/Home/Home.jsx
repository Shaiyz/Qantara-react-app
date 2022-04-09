import React from "react";
import {
  Banner2,
  Banner1,
  Banner3,
  Banner4,
  Banner5,
} from "../../components/HomeBanner";
import NewsLetter from "./NewsLetter";
import { RecommendedItems } from "../../components";

const Home = () => {
  return (
    <>
      <Banner1
        title={"Explore the Luxury"}
        subTitle={
          "Creating your luxury home will begin with us. Shop all modern and exclusive collection now."
        }
        image={"assest/images/home-header-bg.jpg"}
      />

      <RecommendedItems />
      <Banner2
        title={"New Layers of Luxe"}
        subTitle={
          "Al Qantara is a leading provider of luxury residential and commercial lighting, wall décor, decorative accessories, table accessories and furniture."
        }
      />
      <Banner3
        title={"Arteriors Home"}
        subTitle={
          "Founded by Mark Moussa in 1987, Arteriors is leader in sophisticated lighting, furniture, wall décor and accessories. AlQantara is the only agent and distributor in Saudi Arabia."
        }
      />
      <Banner4
        title={"Check Arteriors New Items"}
        subTitle={
          "Immerse yourself in a reimagined vision of luxury, one that celebrates the individual and their unique interpretation of design."
        }
      />
      <Banner5
        title={"UNLIMITED FURNITURE DELIVERY FOR ONE FLAT FEE"}
        subTitle={
          "For one low, Flat free per trip, we will deliver every piece of the furniture in your order regardless of the number of items"
        }
      />
      {/* <NewsLetter /> */}
    </>
  );
};

export default Home;
