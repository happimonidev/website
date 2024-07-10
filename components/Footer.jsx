import Link from "next/link";
import React from "react";
import Container from "./Container";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "./vectors";

const Footer = () => {
  return (
    <footer className="w-full footer__bg text-white">
      <Container>
        <div className="mt-10 lg:py-24 ">
          <div className="flex flex-wrap text-left mb-10">
            {footerLinks.map((item, index) => (
              <div className="lg:w-1/6 md:w-1/2 w-full px-4" key={index}>
                <h2 className="text-white font-medium text-xl md:text-2xl mb-3">
                  {item.heading}
                </h2>
                <nav className="list-none mb-10 flex flex-col gap-4">
                  {item.list.map((row, index) => (
                    <li key={index}>
                      <Link
                        href={row.href}
                        className="text-white font-normal text-sm md:text-xl"
                      >
                        {row.title}
                      </Link>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
            <div className="lg:w-1/6 md:w-1/2 w-full px-4 flex gap-3">
              <Link href="#">
                <InstagramIcon />
              </Link>
              <Link href="#">
                <LinkedinIcon />
              </Link>
              <Link href="#">
                <YoutubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="md:pt-10 bg__lower__footer">
        <Container>
          <div className="py-4  flex justify-between flex-wrap gap-10 opacity-100">
            <div className="w-full md:w-1/4">
              <p className="text-sm text-white opacity-100 ">
                {`Operating in over 10 countries and home to more than 30
                nationalities. Happimoni is a global payments leader in fintech.`}
              </p>
              <p className="text-xl font-semibold text-white mt-5 opacity-100">
                Copyright © 2024 happimoni
              </p>
            </div>
            <div>
              <nav className="list-none mb-10 flex flex-wrap gap-4">
                {otherLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-white text-sm">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  {
    heading: "Solutions",
    list: [
      {
        title: "Global Payments",
        href: "#",
      },
      {
        title: "Global Payments",
        href: "#",
      },
      {
        title: "Global Payments",
        href: "#",
      },
      {
        title: "Global Payments",
        href: "#",
      },
    ],
  },
  {
    heading: "Partners",
    list: [
      {
        title: "Vision",
        href: "#",
      },
      {
        title: "Company",
        href: "#",
      },
      {
        title: "Clients",
        href: "#",
      },
      {
        title: "Happimoni Certification",
        href: "#",
      },
    ],
  },
  {
    heading: "Legal",
    list: [
      {
        title: "Privacy Policy",
        href: "#",
      },
      {
        title: "Privacy Portal Nigeria",
        href: "#",
      },
      {
        title: "Disclosure Policy",
        href: "#",
      },
    ],
  },
  {
    heading: "News and Media",
    list: [
      {
        title: "Insights",
        href: "#",
      },
      {
        title: "Press Enquiries",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
    ],
  },
  {
    heading: "Support",
    list: [
      {
        title: "Developer Portal",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
      {
        title: "Privacy Team Support",
        href: "#",
      },
    ],
  },
];

const otherLinks = [
  {
    title: "Support",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
  {
    title: "Legal",
    href: "#",
  },
  {
    title: "Hempay Certification",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },

  {
    title: "Cookie Policy",
    href: "#",
  },
];
