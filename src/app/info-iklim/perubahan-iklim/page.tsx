"use client";

import PageLayout from "@/components/PageLayout";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function PerubahanIklim() {
  return (
    <PageLayout
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
          label: "Tentang Perubahan Iklim",
        },
      ]}
    >
      <div>
        <Typography variant="h3" className="mb-6 font-bold">
          Mengenai Perubahan Iklim
        </Typography>
        <div className="font-light text-justify">
          <div className="md:float-left flex justify-center">
            <div className="relative w-96 h-96">
              <Image
                alt="about perubahan iklim"
                src="/images/infoiklim/efek-rumah-kaca.jpg"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <p className="mb-8">
            Iklim adalah rata-rata cuaca dimana cuaca merupakan keadaan atmosfer
            pada suatu saat di waktu tertentu. Iklim didefinisikan sebagai
            ukuran rata-rata dan variabilitas kuantitas yang relevan dari
            variabel tertentu (seperti temperatur, curah hujan atau angin), pada
            periode waktu tertentu, yang merentang dari bulanan hingga tahunan
            atau jutaan tahun. Iklim berubah secara terus menerus karena
            interaksi antara komponen-komponennya dan faktor eksternal seperti
            erupsi vulkanik, variasi sinar matahari, dan faktor-faktor
            disebabkan oleh kegiatan manusia seperti misalnya perubahan
            pengunaan lahan dan penggunaan bahan bakar fosil.
          </p>
          <p className="mb-8">
            Konvensi Perserikatan Bangsa-Bangsa (PBB) tentang Kerangka Kerja
            Perubahan Iklim (United Nations Framework Convention on Climate
            Change/UNFCCC) mendefinisikan{" "}
            <span className="font-semibold">
              Perubahan iklim sebagai perubahan iklim yang disebabkan baik
              secara langsung atau tidak langsung oleh aktivitas manusia
              sehingga mengubah kompoisi dari atmosfer global dan variabilitas
              iklim alami pada perioda waktu yang dapat diperbandingkan.
            </span>{" "}
            Komposisi atmosfer global yang dimaksud adalah komposisi material
            atmosfer bumi berupa Gas Rumah Kaca (GRK) yang di antaranya, terdiri
            dari Karbon Dioksida, Metana, Nitrogen, dan sebagainya.
          </p>
          <p className="mb-8">
            Pada dasarnya, Gas Rumah Kaca dibutuhkan untuk menjaga suhu bumi
            tetap stabil. Akan tetapi, konsentrasi Gas Rumah kaca yang semakin
            meningkat membuat lapisan atmosfer semakin tebal. Penebalan lapisan
            atmosfer tersebut menyebabkan jumlah panas bumi yang terperangkap di
            atmosfer bumi semakin banyak, sehingga mengakibatkan peningkatan
            suhu bumi, yang disebut dengan pemanasan global.
          </p>
        </div>
        <div>
          <div className="mb-8 p-6 shadow">
            <Image
              src="/images/infoiklim/grafik-suhu-1.png"
              alt="temperature statistics for the last 30 years"
              height={500}
              width={1500}
            />
            <p className="text-center pt-4 font-light text-sm">
              grafik data suhu rata-rata tahunan selama 30-tahun (periode
              1981-2010). Variasi naik turun suhu setiap tahun menunjukkan
              adanya variabilitas tahunan suhu. Variabilitas data tersebut
              mengalami penyimpangan yang ekstrim dari nilai rata-rata berupa
            </p>
          </div>
        </div>
        <div className="text-justify font-light">
          <p className="mb-8">
            Berbeda dengan perubahan iklim, variabilitas iklim adalah variasi
            iklim dalam keadaan rata-rata atau statistik lain di semua skala
            temporan dan spasial pada satu periode waktu tertentu (seperti: satu
            bulan, musim atau tahun), dibandingkan dengan statistik jangka
            panjang untuk periode kalender yang sama. Variabilitas Iklim diukur
            oleh deviasi ini, yang biasanya disebut anomali. Perbedaan antara
            variabilitas iklim dan perubahan iklim terlihat pada jangka waktu
            perubahan yang terjadi. Variabilitas iklim terlihat pada perubahan
            yang terjadi didalam kerangka waktu yang pendek, seperti satu bulan,
            satu musim atau satu tahun. Sedangkan,perubahan iklim terjadi pada
            periode waktu yang lebih lama, yaitu pada periode dekade atau lebih
            lama lagi. Perubahan Iklim merujuk kepada satu perubahan keadaan
            rata-rata iklim atau variabilitasnya secara signifikan dalam satu
            periode yang panjang (dekade atau lebih lama lagi).
          </p>
        </div>

        <div className=" border border-solid py-4 px-6">
          <div className="flex flex-wrap justify-between gap-8 items-center">
            <p className=" basis-2/3 text-justify grow">
              Untuk melihat perubahan kondisi iklim di suatu wilayah, pada waktu
              tertentu di masa depan, dibandingkan dengan kondisi baseline
              disusun sebuah skenario iklim. Silahkan klik tautan berikut untuk
              menuju informasi sekenario iklim.
            </p>
            <Link href="/info-iklim/skenario-iklim">
              <Button color="red" className="grow">
                Lihat Skenario Iklim
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
