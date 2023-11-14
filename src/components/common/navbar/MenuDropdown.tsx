"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Route } from "./navigation";
export default function MenuDropdown({
  children,
  menuList,
}: Readonly<{
  children: React.ReactNode;
  menuList?: Route[];
}>) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 px-2 lg:ml-auto"
        >
          {children}
          {menuList && (
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </Button>
      </MenuHandler>
      {menuList && (
        <MenuList className="p-1">
          {menuList.map(({ label, icon, route }, key) => {
            return (
              <MenuItem
                key={label}
                onClick={() => {
                  if (route) {
                    router.push(route);
                  }
                  closeMenu();
                }}
                className={`flex items-center gap-2`}
              >
                <Link key={label} href={route ?? "#"}>
                  {icon &&
                    React.createElement(icon, {
                      className: `h-4 w-4`,
                      strokeWidth: 2,
                    })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={"inherit"}
                  >
                    {label}
                  </Typography>
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      )}
    </Menu>
  );
}
