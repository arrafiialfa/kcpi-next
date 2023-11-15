"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Route } from "../app/navigation";
import DisplayInfo from "./dashboard/DisplayInfo";

export default function PageLayout({
  children,
  className,
  routes,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  routes?: Route[];
}>) {
  const sectionStlye = className || " mt-24  py-12 md:py-24 ";
  return (
    <div>
      <div className={" xl:w-3/5 lg:w-3/4 mx-auto px-6 " + sectionStlye}>
        <Breadcrumbs className="mb-8 bg-white p-0">
          {routes?.map((route) => {
            return (
              <a
                key={route.label}
                href={route.route}
                className="opacity-60 flex justify-start items-center gap-2"
              >
                {route.icon && route.icon}
                <span>{route.label}</span>
              </a>
            );
          })}
        </Breadcrumbs>
        {children}
      </div>
      <section className="bg-red-500">
        <div className={" xl:w-3/5 lg:w-3/4 px-6 py-12 mx-auto "}>
          <DisplayInfo />
        </div>
      </section>
    </div>
  );
}
