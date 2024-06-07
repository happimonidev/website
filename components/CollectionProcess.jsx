import React from "react";
import Container from "./Container";

const CollectionProcess = () => {
  return (
    <div className="mb-20">
      <Container>
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          Courteous Loan Collection Process
        </h2>
        <p className="text-base md:text-3xl font-normal text-justify text-balance md:text-center">
          {` Happimoni does not tolerate any form of inappropriate or illegal
          collections. If you have experienced any form of harassment or other
          form of abusive language, threats to your privacy and safety while
          using the Happimoni service, please save the evidence and immediately
          contact our customer service department. We will investigate the
          matter, and where we confirm that the abuse originated from an
          Happimoni staff, undertake appropriate disciplinary and remedial
          measures.`}
        </p>
      </Container>
    </div>
  );
};

export default CollectionProcess;
