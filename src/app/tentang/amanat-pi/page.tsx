"use client";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import ReadNext from "../ReadNext";

export default function AmanatPI() {
  const sectionStlye = "xl:w-3/5 lg:w-3/4 px-6 py-12 md:py-24 mx-auto";
  return (
    <main>
      <section className="pt-32">
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
              label: "Amanat Perubahan Iklim",
            },
          ]}
          className="my-12"
        >
          <div>
            <Typography variant="h3" className="mb-6 font-bold">
              Amanat Perubahan Iklim
            </Typography>
            <div className="font-light text-justify">
              <div className="md:float-left flex justify-center">
                <div className="relative w-96 h-96">
                  <Image
                    alt="roadmap amanat perubahan iklim"
                    src="/images/tentang/amanat-pi.png"
                    fill
                    objectFit="contain"
                  />
                </div>
              </div>
              <p className="mb-8">
                Laporan Kajian Ke-5 (Assessment Reports 5 atau AR5)
                Intergovermental Panel on Climate Change (IPCC) menyebutkan
                bahwa suhu bumi telah meningkat sekitar 0,8°C selama abad
                terakhir. Pada akhir tahun 2100, suhu global diperkirakan akan
                lebih tinggi 1.8-4°C dibandingkan rata-rata suhu pada 1980-1999.
                Kenaikan suhu ini setara dengan 2.5-4.7°C jika dibandingkan
                periode pra-industri (1750). Laporan IPCC juga menegaskan bahwa
                terjadinya perubahan iklim yang berupa meningkatnya emisi gas
                rumah kaca (karbon dioksida, metana, nitrogen oksida dan
                sejumlah gas industri) diakibatkan oleh aktivitas manusia
                Peningkatan emisi gas rumah kaca dalam 50 tahun terkahir
                menunjukkan yang tertinggi dalam sejarah dan belum pernah
                terjadi sebelumnya sejak 800.000 tahun yang lalu. Perubahan
                iklim juga telah berdampak pada ekosistem dan manusia di seluruh
                bagian benua dan samudera di dunia serta beresiko besar bagi
                kesehatan manusia, keamanan pangan global, dan pembangunan
                ekonomi. Permasalahan perubahan iklim dan dampaknya mendorong
                Konferensi Tingkat Tinggi (KTT) Bumi di Rio de Janeiro, Brazil
                tahun 1992, menghasilkan Konvensi Kerangka Kerja Perserikatan
                Bangsa-Bangsa tentang Perubahan Iklim (United Nations Framework
                Convention on Climate Change, UNFCCC). Konvensi ini bertujuan
                untuk menstabilisasi konsentrasi gas-gas rumah kaca di atmosfer
                pada tingkat yang tidak membahayakan sistem iklim sehingga
                ekosistem dapat memberikan jaminan pada produksi pangan dan
                keberlanjutan pada pembangunan ekonomiKonvensi Perubahan Iklim
                memiliki kekuatan hukum sejak 21 Maret 1994 dengan membagi
                negara-negara peratifikasi dalam 2 (dua) kelompok, yaitu Negara
                Annex I dan Negara Non-Annex I. Negara Annex I adalah
                negara-negara penyumbang emisi GRK sejak revolusi industri.
                Sedangkan Negara Non-Annex I adalah negara-negara yang tidak
                termasuk dalam Annex I yang kontribusinya terhadap emisi GRK
                jauh lebih sedikit dan memiliki pertumbuhan ekonomi yang jauh
                lebih rendah.
              </p>
            </div>
            <div className="p-4 shadow">
              <iframe
                src="https://www.youtube.com/embed/S6En2UKGEH8?si=sfKvtpND3mDq5a8e"
                title="YouTube video player"
                allowFullScreen={true}
                data-ruffle-polyfilled=""
                height={500}
                width="100%"
              ></iframe>
              <p className="text-xs pt-4 font-light text-center">
                Komitmen Indonesia untuk aksi nyata, Pidato Bapak Presiden RI
                Joko Widodo pada acara Paris Agreement 2015
              </p>
            </div>
          </div>
          <ReadNext
            cards={[
              {
                title: "Komitmen Indonesia Dalam Pengendalian Perubahan Iklim",
                description:
                  "Indonesia telah terlibat aktif di tingkat internasional sebagai salah satu negara peratifikasi Konvensi Kerangka Kerja Perubahan Iklim (UNFCCC) dan Protocol Kyoto.",
                cta: {
                  href: "/tentang/komitmen-indonesia",
                },
              },
              {
                title: "Konvensi Perubahan Iklim",
                description:
                  "Kerangka Konvensi UNFCCC membentuk badan pengambilan keputusan tertinggi yaitu Pertemuan Para Pihak (Conference of the Parties, COP) untuk mencapai tujuannya.",
                cta: {
                  href: "/tentang/konvensi",
                },
              },
            ]}
          />
        </PageLayout>
      </section>
    </main>
  );
}
