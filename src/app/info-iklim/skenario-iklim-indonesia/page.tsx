"use client";

import PageLayout from "@/components/PageLayout";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function SkenarioIklimIndonesia() {
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
                Skenario Iklim Indonesia
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
              label: "Skenario Iklim Indonesia",
            },
          ]}
        >
          <div>
            <Typography variant="h3" className="mb-6 font-bold">
              Skenario Iklim di Indonesia
            </Typography>
            <Typography variant="h5" className="font-normal mb06">
              Bagaimana Skenario Iklim di Indonesia ?
            </Typography>
            <div className="font-light text-justify">
              <p className="mb-8">
                Proyeksi skenario iklim di Indonesia menggunakan model Regional
                Climate Model (RCM) yang merupakan turunan dari Global Climate
                Model (GCM). GCM menggambarkan iklim dengan grid tiga-dimensi
                pada globe (bola bumi), khususnya dengan resolusi horizontal
                antara 250-600 km, 10 hingga 20 lapisan vertikal di atmosfer dan
                sebanyak 30 lapisan lautan. Resolusi GCM relatif kasar terhadap
                skala unit keterpaparan pada kebanyakan kajian dampak. Model GCM
                telah menjadi pendekatan yang paling umum untuk pengembangan
                skenario perubahan iklim. Namun, di banyak aplikasi, khususnya
                untuk skala sub-nasional atau skala lokal, informasi yang
                disajikan oleh GCM tidaklah mencukupi, sehingga teknik-teknik
                downscaling diperlukan untuk menyediakan informasi yang lebih
                bersifat regional/ lebih rinci dalam skenario perubahan iklim.
              </p>
              <p className="mb-8">
                Karena itulah, Indonesia menggunakan pendekatan RCM, dengan
                meningkatkan resolusi horizontal menjadi 20 km x 20 km. Simulasi
                dilakukan dengan menggunakan pendekatan statistik untuk
                memproyeksikan iklim mendatang di Indonesia dengan baseline
                climate periode 1981 -2010, dan skenario iklim periode
                2011-2100. Terdapat dua skenario RCP yang berbeda, yaitu RCP 4.5
                dan RCP 8.5.
              </p>
            </div>
            <div>
              <div className="mb-8 p-6 shadow">
                <Image
                  src="/images/infoiklim/skenario_iklim_indonesia.png"
                  alt="Perubahan Temperatur Bumi Berdasarkan Skenario RCP"
                  height={500}
                  width={1500}
                />
                <p className="text-center pt-4 font-light text-sm">
                  Figure 3: Perubahan Temperatur Bumi Berdasarkan Skenario RCP:
                  skenario biru (RCP 2.6 dan RCP 4.5) adalah 2 {"<"} suhu bumi{" "}
                  {">"}1,5 skenario merah (RCP 6.0 dan 8.5) adalah suhu bumi{" "}
                  {">"}2, bahkan bisa mencapai 8 atau 11 di tahun 2100
                </p>
              </div>
            </div>
            <Typography variant="h5" className="font-normal mb06 mb-4">
              Lingkup kegiatan Skenario Iklim di Indonesia adalah sebagai
              berikut
            </Typography>
            <div>
              <div className="mb-8">
                <Image
                  src="/images/infoiklim/lingkupkegiatan.png"
                  alt="lingkup kegiatan skenario iklim indonesia"
                  height={500}
                  width={1500}
                />
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
