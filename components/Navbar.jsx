"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { X, Menu } from "lucide-react";

const Navbar = ({ light = false }) => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const handleToggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <section className="bg-[#141414] text-white">
        {/* desktop menu */}
        <Container>
          <div className="md:flex gap-8 py-4 hidden">
            <div className="flex items-center ml-5 gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={`/assets/images/logo.png`}
                  alt="logo"
                  width="74"
                  height="74"
                />
                <p className="text-xl font-medium">HappiMoni</p>
              </Link>
            </div>

            <div className="flex gap-8 items-center">
              {menuList.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    prefetch={false}
                    href={item.href}
                    key={index}
                    className={`pb-1 ${
                      isActive
                        ? "text-[#188BF4] hover:text-white border-b border-[#188BF4] "
                        : "hover:text-[#188BF4]"
                    }  `}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>

        {/* mobile menu */}
        <div className="flex justify-between items-center container px-5 md:px-20 py-4 md:hidden">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={`/assets/images/logo.png`}
                alt="logo"
                width="60"
                height="60"
                className="max-w-full max-h-full"
              />
              <p className="text-base md:text-xl font-medium">HappiMoni</p>
            </Link>
          </div>
          {!active ? (
            <div onClick={handleToggleMenu}>
              <Menu color={`white`} />
            </div>
          ) : null}
        </div>
        <div
          className="fixed inset-0 flex z-50 "
          style={{ visibility: active ? "visible" : "hidden" }}
        >
          {/* Sidebar menu content */}
          <div
            className={`w-64 bg-[#141414] text-white py-4 transform transition-transform ease-in-out duration-300 shadow-md`}
            style={{
              transform: active ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="flex justify-between items-center mb-1 pb-3 border-b border-[#188BF4]">
              <h2 className="text-xl font-semibold px-5">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={handleToggleMenu}
                >
                  <Image
                    src={`/assets/images/logo.png`}
                    alt="logo"
                    width="74"
                    height="74"
                  />
                  <p className="text-xl font-medium">HappiMoni</p>
                </Link>
              </h2>
              <button onClick={handleToggleMenu} className="mx-5">
                <X color={"white"} />
              </button>
            </div>

            <ul className="p-5">
              {menuList.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li className="mb-3" key={index}>
                    <Link
                      key={index}
                      onClick={handleToggleMenu}
                      href={item.href}
                      className={`${
                        isActive
                          ? "text-[#188BF4] hover:text-white"
                          : "hover:text-[#188BF4]"
                      }  `}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

const menuList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "FAQ",
    href: "#faqs",
  },
];
