import React from "react";
import Container from "./Container";

const Cancellation = () => {
  return (
    <div className="mb-20">
      <Container>
        <h2 className="text-3xl md:text-5xl font-semibold md:text-center mb-5">
          Opportunity of Loan Cancellation
        </h2>
        <p className="text-base md:text-3xl font-normal text-justify md:text-center">
          {`Happimoni allows a maximum period of 24 hours from the moment of
          disbursement within which the loan can be cancelled. If you have
          applied for the loan by mistake, please repay the principal within
          24hours, then contact our customer service at your earliest
          convenience to clear the loan.`}
        </p>
      </Container>
    </div>
  );
};

export default Cancellation;
