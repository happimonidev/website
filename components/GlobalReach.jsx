import React from "react";
import Container from "./Container";

const GlobalReach = () => {
  return (
    <section className="bg-white overflow-hidden mb-28">
      <Container>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl tracking-widest">
              Personal loans
            </h2>
            <h1 className="animate-fade-right animate-once text-black text-3xl md:text-6xl  font-semibold mb-4">
              Serving users in Africa, Southeast Asia and Latin Americ
            </h1>
            <p className="text-3xl font-normal text-black animate-fade-up animate-once">
              {`Personal loans have covered Nigeria, Egypt, Pakistan, Indonesia,
              Mexico, Colombia, and other countries are gradually opening
              up......`}
            </p>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/assets/images/globe.png"
          />
        </div>
      </Container>
    </section>
  );
};

export default GlobalReach;
