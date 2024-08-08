import React from "react";
import Div from "../Div";
import Wrapper from "../Wrapper";
import Button from "../Button";

const Header = () => {
  return (
    <header className="w-full relative h-[90vh] bg-gray-800 px-2 flex flex-col items-center justify-center md:h-[70vh] md:px-20 lg:h-[90vh] max-h-[900px] lg:items-start">
      <Wrapper className="text-center lg:text-start">
        <Div relative>
          <h1 className="font-signature text-myGold text-[86px] lg:text-[128px]">
            Premium Travel
          </h1>
          <h2 className="text-[24px] font-bold relative -top-14 text-white lg:text-[54px] lg:-top-20">
            Beyond Expectation
          </h2>
        </Div>
        <Div className="text-white -mt-10 md:-mt-12 lg:-mt-20">
          <p className="lg:text-[24px] max-w-[700px]">
            Experience the finest that Indonesia has to offer with our curated
            selection of premium trips, ensuring comfort every step of the way
          </p>
          <Button text={'Take me there'}/>
        </Div>
      </Wrapper>
    </header>
  );
};

export default Header;
