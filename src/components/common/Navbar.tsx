"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconButton, Collapse } from "@material-tailwind/react";
import { routes } from "./navbar/navigation";
import MenuDropdown from "./navbar/MenuDropdown";

export default function Navbars() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="z-50 fixed top-0 left-0 bg-white bg-opacity-90 w-full pb-6 pt-8 backdrop-blur-3xl  ">
      <div className="text-sm px-4 xl:w-3/5 lg:w-3/4 md:w-4/5 mx-auto flex  justify-center items-center gap-x-6 ">
        <div className="basis-3/5 sm:basis-1/2 md:basis-2/3 xl:basis-1/3">
          <Link href="/">
            <Image
              src="/images/landingpage/logo.png"
              alt="LOGO"
              width={500}
              height={500}
            ></Image>
          </Link>
        </div>

        <ul className="hidden md:flex flex-wrap flex-row-reverse justify-start  items-center gap-2 text-slate-600">
          {routes.map((route) => {
            return (
              <MenuDropdown key={route.label} menuList={route.children}>
                {route.route ? (
                  <Link key={route.route} href={route.route}>
                    {route.label}
                  </Link>
                ) : (
                  <a>{route.label}</a>
                )}
              </MenuDropdown>
            );
          })}
        </ul>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse className="" open={openNav}>
        <div className="container mx-auto py-4">
          <div className="py-6">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {routes.map((route) => {
                return (
                  <MenuDropdown key={route.label} menuList={route.children}>
                    {route.route ? (
                      <Link key={route.route} href={route.route}>
                        {route.label}
                      </Link>
                    ) : (
                      <a>{route.label}</a>
                    )}
                  </MenuDropdown>
                );
              })}
            </ul>
          </div>
        </div>
      </Collapse>
    </nav>
  );
}
