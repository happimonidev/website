import React from "react";
import Container from "./Container";
import Link from "next/link";
import Button from "./Button";
import { PlayIcon } from "./vectors";

const Trusted = () => {
  return (
    <section className="bg-white overflow-hidden lg:mb-28 mb-10">
      <div className="flex flex-wrap">
        <img
          alt="trust"
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="/assets/images/trusted.png"
        />

        <div className="lg:w-1/2 w-full px-5 md:px-10 mb-6 lg:mb-0 flex flex-col gap-4 2xl:w-2/5 2xl:pr-24">
          <h1 className="animate-fade-right animate-once mt-5 lg:mt-0 text-black text-3xl md:text-5xl font-semibold mb-4 leading-normal">
            Trusted by thousands of Nigerians
          </h1>
          <p className="animate-fade-up animate-once text-base md:text-3xl font-normal text-balance text-black leading-normal">
            {`I am glad I found Happimoni. I was able to get a loan in minutes
              to solve my business problem and avoid embarrassment. With
              Happimoni I no longer need to beg friends and family for soft loan
              in moments of emergencies. Thank you Happimoni.`}
          </p>
          <Link
            href="#"
            className="w-4/5 md:w-3/5 mt-5 mx-auto animate-fade-up animate-once"
          >
            <Button className="flex items-center rounded-full px-10">
              <PlayIcon />
              <span className="text-xl md:text-3xl">Download APK</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
