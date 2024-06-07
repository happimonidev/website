import React from "react";
import Container from "./Container";

const Safety = () => {
  return (
    <div className="mb-20 ">
      <Container>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:py-6 mb-6 lg:mb-0 flex flex-col justify-center gap-4">
            <h2 className="text-3xl md:text-5xl font-semibold md:text-center md:text-left md:mb-5">
              Safe and Efficient
            </h2>

            <p classNameName="text-3xl font-normal text-black">
              {`We provide market-competitive credit loan and consumer financial
          services in Nigeria, Egypt, Pakistan, Indonesia , Mexico, Colombia and
          other places , and meet people's needs with safe and efficient
          products and services.`}
            </p>
          </div>
          <img
            alt="finance"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/assets/images/finance.png"
          />
        </div>
      </Container>
    </div>
  );
};

export default Safety;
