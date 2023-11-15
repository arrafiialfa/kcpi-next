"use client";

import PageLayout from "@/components/PageLayout";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import ReadNext from "@/app/tentang/ReadNext";
import PostsByCategory from "@/components/dashboard/PostsByCategory";

export default function DampakPerubahanIklim() {
  return (
    <main>
      <section>
        <div className="relative h-96 w-full mt-24 overflow-clip anima">
          <Image
            src="/images/tentang/photo-test.avif"
            alt="image 1"
            fill={true}
            objectFit="cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70 py-6">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="h1" color="white" className="mb-4 text-xl ">
                Dampak & Fenomena Perubahan Iklim
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section>
        <PageLayout
          className="mt-8"
          routes={[
            {
              route: "/",
              label: "Home",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              ),
            },
            {
              label: "Dampak & Fenomena Perubahan Iklim",
            },
          ]}
        >
          <div className="pb-12">
            <div className="font-light text-justify">
              <p className="mb-8">
                Perubahan iklim berdampak sangat luas pada kehidupan masyarakat.
                Kenaikan suhu bumi tidak hanya berdampak pada naiknya temperatur
                bumi tetapi juga mengubah sistem iklim yang mempengaruhi
                berbagai aspek pada perubahan alam dan kehidupan manusia,
                seperti kualitas dan kuantitas air, habitat, hutan, kesehatan,
                lahan pertanian dan ekosistem wilayah pesisir.
              </p>
            </div>
            <div>
              <PostsByCategory cardsClassName="bg-gray-50" />
            </div>
          </div>

          <div className="my-8">
            <div className="font-light text-justify">
              <p className="mb-8">
                Fenomena-fenomena perubahan iklim telah terjadi di dunia, bahkan
                di Indonesia. Berikut ini adalah beberapa fenomena perubahan
                iklim yang dirangkum oleh tim knowledge center.
              </p>
            </div>
            <div>IETRATE OVER POSTS</div>
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
