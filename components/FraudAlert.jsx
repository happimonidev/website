import React from "react";
import Container from "./Container";
import Button from "./Button";

const FraudAlert = () => {
  return (
    <div className="lg:mb-28 mb-10">
      <Container>
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5 animate-fade-up animate-once">
          Fraud alerts
        </h2>
        <p className="text-base md:text-3xl font-normal text-balance md:text-center animate-fade-up animate-once">
          {`Fraudsters are using the internet, mail, and telephone in many ways to
          try to make you fall victim to their schemes. It’s important to
          remember that fraudsters are clever at gaining your trust and
          gathering your personal information. For the sake of safety, please do
          not click the link in the email or SMS of unknown origin, but dial the
          number in the email or SMS. You can choose to find the contact
          information of easemoni on our website or application to contact`}
        </p>
        <div className="mx-auto w-full md:w-max mt-10 animate-fade-up animate-once">
          <Button className="font-[mogula] px-[60px] text-base rounded-xl leading-normal">
            Learn more
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FraudAlert;
