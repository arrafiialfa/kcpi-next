"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./NavbarList";
import { IconButton, MobileNav, Button } from "@material-tailwind/react";
export default function Navbars() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-gray-50 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
      <div
        className={`text-sm px-4 xl:w-3/5 lg:w-3/4 md:w-4/5 mx-auto flex  justify-center gap-x-6 `}
      >
        <div className="basis-1/3">
          <Link href="/">
            <Image
              src="/images/landingpage/logo.png"
              alt="LOGO"
              width={300}
              height={100}
            ></Image>
          </Link>
        </div>

        <NavList className="hidden  md:flex flex-row-reverse flex-wrap items-center gap-4 text-slate-600" />

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

      <MobileNav className="" open={openNav}>
        <div className="container mx-auto p-4">
          <div className="py-6">
            <NavList className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" />
          </div>
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </nav>
  );
}
