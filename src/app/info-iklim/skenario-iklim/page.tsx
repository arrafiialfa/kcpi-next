"use client";

import PageLayout from "@/components/PageLayout";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import ReadNext from "@/app/tentang/ReadNext";

export default function PerubahanIklim() {
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
                Skenario Iklim
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
              label: "Skenario Iklim",
            },
          ]}
        >
          <div>
            <Typography variant="h3" className="mb-6 font-bold">
              Skenario Iklim
            </Typography>
            <Typography variant="h5" className="font-normal mb06">
              Apakah Skenario Iklim?
            </Typography>
            <div className="font-light text-justify">
              <p className="mb-8">
                Penyusunan skenario iklim ditujukan untuk melihat perubahan
                kondisi iklim di suatu wilayah, pada waktu tertentu di masa
                depan, dibandingkan dengan kondisi baseline. Rentang waktu untuk
                membandingkan kedua kondisi tersebut adalah sekitar 30 (tiga
                puluh) tahun. Misalnya informasi tentang proyeksi perubahan
                curah hujan dan suhu udara pada skala waktu tertentu (tahunan,
                bulanan, atau harian) dan ketinggian muka laut.
              </p>
              <p className="mb-8">
                Proyeksi ini disusun berdasarkan luaran model-model iklim yang
                dibangun untuk mempelajari konsekuensi pengaruh antropogenik
                perubahan iklim. Antropogenik perubahan iklim ini seringkali
                berguna sebagai masukan untuk model-model dampak iklim.
              </p>
              <p className="mb-8">
                Pemilihan tahun proyeksi masa depan didasarkan pada kerangka
                waktu sistem pembangunan di Indonesia. Baik melalui Rencana Tata
                Ruang Wilayah (RTRW) maupun Rencana Pembangunan Jangka Panjang
                (RPJP).
              </p>
            </div>
            <div>
              <div className="mb-8 p-6 shadow">
                <Image
                  src="/images/infoiklim/skenarioiklim.png"
                  alt="temperature statistics for the last 30 years"
                  height={500}
                  width={1500}
                />
              </div>
            </div>
            <Typography variant="h5" className="font-normal mb06">
              Apakah Skenario Iklim?
            </Typography>
            <div className="text-justify font-light">
              <p className="mb-8">
                RCP – Representative Concentration Pathways adalah generasi
                terkini dari skenario yang menyediakan masukan mengenai
                model-model iklim. Skenario Iklim telah lama digunakan oleh para
                perencana dan pembuat keputusan untuk menganalisis situasi yang
                pengaruhnya tidak menentu (uncertain). Dalam riset iklim,
                skenario emisi digunakan untuk menggali seberapa jauh kontribusi
                manusia untuk perubahan iklim di masa depan yang dilihat melalui
                faktor-faktor tertentu seperti: pertumbuhan penduduk,
                pembangunan ekonomi, dan pengembangan teknologi baru.
              </p>
              <p className="mb-8">
                Proyeksi skenario kondisi sosial dan ekonomi mendatang juga
                digunakan untuk menggali seberapa jauh dampak perubahan iklim
                pada perubahan kondisi dunia, misalnya: perubahan jumlah orang
                miskin di masa depan. Penggunaan skenario iklim ini tidak
                dimaksudkan untuk memprediksi masa yang akan datang, akan tetapi
                untuk memproyeksikan dampak-dampak yang akan terjadi di masa
                mendatang akibat perubahan iklim.
              </p>
            </div>
            <div>
              <div className="mb-8 p-6 shadow">
                <Image
                  src="/images/infoiklim/skenarioiklim2.png"
                  alt="temperature statistics for the last 30 years"
                  height={500}
                  width={1500}
                />
              </div>
            </div>
            <div className="mb-8">
              <ReadNext
                cards={[
                  {
                    title: "Skenario Iklim Indonesia",
                    description:
                      "Proyeksi skenario iklim di Indonesia menggunakan model Regional Climate Model (RCM) yang merupakan turunan dari Global Climate Model (GCM).",
                    cta: {
                      href: "/info-iklim/skenario-iklim-indonesia",
                      text: "Lihat Skenario Iklim Indonesia",
                    },
                  },
                ]}
              />
            </div>
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
