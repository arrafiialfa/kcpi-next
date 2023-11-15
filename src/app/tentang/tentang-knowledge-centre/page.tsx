"use client";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import DisplayInfo from "@/components/dashboard/DisplayInfo";

export default function AboutKnowledgeCentre() {
  const sectionStlye = "xl:w-3/5 lg:w-3/4 px-6 py-12 md:py-24 mx-auto";
  return (
    <main>
      <section>
        <div className="relative h-96 w-full mt-24">
          <Image
            src="/images/tentang/photo-test.avif"
            alt="image 1"
            fill={true}
            objectFit="cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70 py-6">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="h1" color="white" className="mb-4 text-xl ">
                Tentang Knowledge Centre Perubahan Iklim Indonesia Climate
                Innovation in Action KCPI - IC ICan
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section>
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
              label: "Tentang Knowledge Centre",
            },
          ]}
          className="my-12"
        >
          <div>
            <Typography variant="h3" className="mb-4 font-normal">
              Apa Itu Knowledge Centre ?
            </Typography>
            <div className="font-light text-justify">
              <p className="mb-8">
                Peningkatan konsentrasi gas rumah kaca di atmosfer bumi
                menyebabkan peningkatan suhu bumi yang berdampak pada perubahan
                iklim global. Hal ini mengakibatkan sejumlah permasalahan
                lingkungan dan cuaca ekstrim yang berakibat pada terjadinya
                bencana alam seperti longsor, kebakaran hutan, kekeringan, dan
                gagal panen di berbagai daerah di Indonesia. Perubahan iklim
                juga mengancam kehidupan masyarakat pantai karena pemanasan
                global menyebabkan abrasi dan intrusi air laut. Dampak perubahan
                iklim mempengaruhi kehidupan perekonomian, mengancam kestabilan
                ekosistem dan memperpendek usia infrastruktur yang mendukung
                kehidupan masyarakat. Penelitian menyimpulkan bahwa manusia
                adalah subjek penyebab peningkatan gas rumah kaca sekaligus
                penderita akibat dari perubahan iklim. Akan tetapi, mayoritas
                manusia tidak menyadari hal ini. Sehingga terus-menerus
                melakukan tindakan yang memproduksi gas rumah kaca dan
                menyebabkan kenaikan suhu bumi. Untuk itu dibutuhkan suatu media
                informasi untuk menyadarkan masayarakat tentang posisinya dalam
                pemanasan dan perubahan iklim.
              </p>
              <p className="mb-8">
                Penelitian menyimpulkan bahwa manusia adalah subjek penyebab
                peningkatan gas rumah kaca sekaligus penderita akibat dari
                perubahan iklim. Akan tetapi, mayoritas manusia tidak menyadari
                hal ini. Sehingga terus-menerus melakukan tindakan yang
                memproduksi gas rumah kaca dan menyebabkan kenaikan suhu bumi.
                Untuk itu dibutuhkan suatu media informasi untuk menyadarkan
                masayarakat tentang posisinya dalam pemanasan dan perubahan
                iklim.
              </p>
            </div>
            <div className="mb-8">
              <Image
                src="/images/tentang/tentang-knowledge-center.png"
                alt="tentang-knowledge-centre picture"
                height={500}
                width={1500}
              />
            </div>
            <div className="text-justify font-light">
              <p className="mb-8">
                Sebagai National Focal Point Pengendalian Perubahan Iklim di
                Indonesia, Kementerian Lingkungan Hidup dan Kehutanan melalui
                Direktorat Jenderal Pengendalian Perubahan Iklim membuat suatu
                wadah pengetahuan untuk masyarakat luas di Indonesia. Wadah ini
                dikemas dalam bentuk Knowledge Centre yang berisi pengetahuan
                tentang penyebab, dampak dan potensi perubahan iklim di
                Indonesia.
              </p>
              <p className="mb-8">
                Kelompok sasaran pembangunan website KCPI - IC ICan ditujukan
                untuk masyarakat umum sehingga format penyajian data dan
                informasi dibuat dalam narasi sederhana yang disertai dengan
                tampilan infografis, video, animasi dan peta. Di antaranya
                adalah pengertian perubahan iklim, dampak-dampak perubahan
                iklim, respons dunia terhadap perubahan iklim beserta reaksi dan
                tindakannya, peran Indonesia dalam isu perubahan iklim dan
                informasi terkait hal-hal apa saja yang bisa dilakukan oleh
                masyarakat untuk berpartisipasi menurunkan suhu bumi dan
                mengendalikan perubahan iklim.
              </p>
              <p className="mb-8">
                Tujuan pembangunan Knowledge Centre adalah memberikan edukasi
                masyarakat tentang perubahan iklim dan meningkatkan peran aktif
                dalam aksi nyata pengendalian perubahan iklim.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>
      <section className="bg-red-500">
        <div className={" xl:w-3/5 lg:w-3/4 px-6 py-12  mx-auto "}>
          <DisplayInfo />
        </div>
      </section>
    </main>
  );
}
