"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";

import logo from "../../public/images/logo/Zamrood-color.svg";
import logowhite from "../../public/images/logo/Zamrood-white.svg";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Button from "./Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== isScrolled) {
        setIsScrolled(isTop);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav
      className={cn(
        "w-full fixed top-0 z-50 transition-all ease-in",
        isScrolled ? "bg-transparent" : "bg-myWhite shadow-lg"
      )}
    >
      <Wrapper className="flex justify-between items-center p-4 md:px-8 lg:px-0 lg:py-5">
        <Div>
          <Link href={"/"}>
            <Image src={isScrolled ? logowhite : logo} width={134} alt="logo" />
          </Link>
        </Div>

        <Div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Div
                className={cn(
                  "p-3 border rounded-full",
                  isScrolled ? "border-myWhite" : "border-myGreen"
                )}
              >
                <Icon
                  icon={"iconamoon:menu-burger-horizontal-bold"}
                  className={cn(
                    "text-xl",
                    isScrolled ? "text-myWhite" : "text-myGreen"
                  )}
                />
              </Div>
            </SheetTrigger>
            <SheetContent>
              <Div full column Hfull className="py-5 mt-16 items-end gap-5">
                <SheetClose>
                  <a className="text-myGreen text-20" href="/">
                    Homepage
                  </a>
                </SheetClose>
                <SheetClose>
                  <a className="text-myGreen text-20" href="#custom-trip">
                    Customize your trip
                  </a>
                </SheetClose>
                <SheetClose>
                  <a className="text-myGreen text-20" href="#destination">
                    Destination
                  </a>
                </SheetClose>
                <SheetClose>
                  <a className="text-myGreen text-20" href="#article">
                    Article
                  </a>
                </SheetClose>
                <Button
                  text={"Need assistance?"}
                  className="text-myDarkGreen border-myDarkGreen w-fit py-2 mx-0 hover:text-myWhite hover:bg-myDarkGreen"
                  onClick={() => {
                    window.open(
                      "https://wa.me/6283831556160?text=hii i want to talk with you",
                      "_blank"
                    );
                  }}
                />
              </Div>
            </SheetContent>
          </Sheet>
        </Div>

        <Div
          full
          itemsCenter
          flex
          grow
          className="max-lg:hidden justify-end gap-10"
        >
          <Div>
            <Link
              href={"/"}
              className={cn(
                "font-semibold",
                isScrolled ? "text-myWhite" : "text-myGreen"
              )}
            >
              Homepage
            </Link>
          </Div>
          <Div>
            <Link
              href={"#custom-trip"}
              className={cn(
                "font-semibold",
                isScrolled ? "text-myWhite" : "text-myGreen"
              )}
            >
              Customize Your Trip
            </Link>
          </Div>
          <Div>
            <Link
              href={"#destination"}
              className={cn(
                "font-semibold",
                isScrolled ? "text-myWhite" : "text-myGreen"
              )}
            >
              Destination
            </Link>
          </Div>
          <Div>
            <Link
              href={"#article"}
              className={cn(
                "font-semibold",
                isScrolled ? "text-myWhite" : "text-myGreen"
              )}
            >
              Article
            </Link>
          </Div>
          <Div>
            <Button
              text={"Need assistance?"}
              className={cn(
                "text-myGreen border-myGreen w-fit py-2 mt-0 mx-0 hover:text-myWhite hover:bg-myDarkGreen",
                isScrolled
                  ? "text-myWhite border-myWhite hover:bg-myWhite hover:text-myGreen"
                  : ""
              )}
              onClick={() => {
                window.open(
                  "https://wa.me/6283831556160?text=hii i want to talk with you",
                  "_blank"
                );
              }}
            />
          </Div>
        </Div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
