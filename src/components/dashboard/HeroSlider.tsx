"use client";

import React, { useState, useEffect } from "react";
import HeroSlider, { Slide, ButtonsNav, Overlay } from "hero-slider";
import Wrapper from "../common/Wrapper";
import { heroTitles } from "@/app/dashboard-data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [currentOverlay, setCurrentOverlay] = useState(heroTitles[0]);

  useEffect(() => {
    setCurrentOverlay(heroTitles[currentSlide - 2 < 0 ? 0 : currentSlide - 2]);
  }, [currentSlide]);

  return (
    <HeroSlider
      autoplay={false}
      animations={{ slidingAnimation: "fade" }}
      width="full"
      height={600}
      controller={{
        initialSlide: 2,
        slidingDuration: 500,
        slidingDelay: 200,
        onSliding: (nextSlide: number) => {
          console.log(nextSlide);
        },
        onBeforeSliding: (previousSlide: number, nextSlide: number) => {
          setCurrentSlide(nextSlide);
        },
        onAfterSliding: (nextSlide: number) => {
          console.debug("onAfterSliding(nextSlide): ", nextSlide);
        },
      }}
    >
      <Overlay>
        <Wrapper>
          <h1 className="m-0 p-0 w-3/5 text-center text-2xl xl:text-4xl font-bold text-white">
            {currentOverlay.title}
          </h1>
          {/* <p className=" text-white font-light my-8 text-center">
            {currentOverlay.description}
          </p> */}
          {/* <button className="px-8 py-4 text-white border-2">
            {currentOverlay.cta.text}
          </button> */}
        </Wrapper>
      </Overlay>

      {heroTitles.map((slide) => {
        return (
          <Slide
            key={slide.title}
            label={slide.title}
            shouldRenderMask
            background={{
              backgroundAnimation: "zoom",
              backgroundImageBlendMode: "color",
              backgroundImageSrc: slide.backgroundImage,
            }}
          />
        );
      })}

      <ButtonsNav />
    </HeroSlider>
  );
}
