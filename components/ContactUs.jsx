import React from "react";
import Container from "./Container";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-white overflow-hidden mb-20">
      <Container>
        <div className="flex flex-wrap  w-full">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col gap-4">
            <h1 className="text-black text-3xl md:text-5xl font-semibold mb-4 leading-normal">
              How To Contact Us
            </h1>

            <div className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Mail color="white" fill="black" />
                <span className="text-base md:text-3xl font-medium">
                  easemoni@blueridgemfb.com
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone fill="black" />
                <span className="text-base md:text-3xl font-medium">
                  07009987769
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin color="white" fill="black" />
                <span className="text-base md:text-3xl font-medium">
                  77, Opebi Street,Ikeja, Lagos.
                </span>
              </li>
            </div>
          </div>
          <img
            alt="contact"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/assets/images/contact.png"
          />
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
