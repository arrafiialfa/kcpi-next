"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
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
              label: "Konvensi",
            },
          ]}
          className="my-12"
        >
          <div>
            <Typography variant="h3" className="mb-6 font-bold">
              Konvensi Perubahan Iklim
            </Typography>
            <div className="font-light text-justify">
              <p className="mb-8">
                Kerangka Konvensi UNFCCC membentuk badan pengambilan keputusan
                tertinggi yaitu Pertemuan Para Pihak (Conference of the Parties,
                COP) untuk mencapai tujuannya. Pertemuan Para Pihak berperan
                dalam mengkaji, memantau pelaksanaan Konvensi dan kewajiban para
                Negara Pihak. Pertemuan Para Pihak juga mempromosikan dan
                memfasilitasi pertukaran informasi, membuat rekomendasi kepada
                Para Pihak, dan mendirikan badan badan pendukung jika dipandang
                perlu.
              </p>
              <p className="mb-8">
                Otoritas pengambilan keputusan tertinggi di bawah UNFCCC
                dilaksanakan melalui COP/CMP yang merupakan pertemuan tahunan
                Para Pihak United Nations Framework Convention on Climate
                Change, UNFCCC dan Conferences of the Parties serving as meeting
                of parties to the Protokol Kyoto (CMP). Pertemuan COP/CMP
                didukung oleh 2 (dua) badan yaitu Badan Pendukung terkait dengan
                aspek ilmiah dan teknologi atau Subsidiary Body for Scientific
                and Technological Advice (SBSTA) dan Badan Pendukung Untuk
                Pelaksanaan Konvensi atau Subsidiary Body for Implementation
                (SBI). SBSTA memberikan informasi dan rekomendasi ilmiah serta
                teknologis secara tepat waktu kepada COP, sedangkan SBI membantu
                COP mengkaji pelaksanaan dari Konvensi.
              </p>
            </div>
            <Typography variant="h5" className="mb-6 font-semibold">
              Protokol Kyoto
            </Typography>
            <div className="font-light text-justify">
              <p className="mb-8">
                Sidang ketiga Konferensi Para Pihak (Third Session of the
                Conference of Parties, COP-3) yang diselenggarakan di Kyoto,
                Jepang, tahun 1997, menghasilkan keputusan (Decision 1/CP.3)
                untuk mengadopsi Protokol Kyoto untuk Konvensi kerangka PBB
                tentang Perubahan Iklim. Protokol Kyoto merupakan dasar bagi
                Negara-negara industri untuk mengurangi emisi gas rumah kaca
                gabungan mereka paling sedikit 5 persen dari tingkat emisi tahun
                1990 menjelang periode 2008-2012. Komitmen yang mengikat secara
                hukum ini, menempatkan beban pada negara-negara maju, dengan
                berdasarkan pada prinsip common but differentiated
                responsibilities.
              </p>
              <p className="mb-8">
                Protokol Kyoto mengatur mekanisme penurunan emisi GRK yang
                dilaksanakan negara-negara maju, yakni: (1) Implementasi Bersama
                (Joint Implementation), (2) Perdagangan Emisi (Emission
                Trading); dan (3) Mekanisme Pembangunan Bersih (Clean
                Development Mechanism, CDM). Joint Implementation (JI) merupakan
                mekanisme penurunan emisi dimana negara-negara Annex I dapat
                mengalihkan pengurangan emisi melalui proyek bersama dengan
                tujuan mengurangi emisi GRK. Emission Trading (ET) merupakan
                mekanisme perdagangan emisi yang dilakukan antar negara
                industri, dimana negara industri yang emisi GRK-nya di bawah
                batas yang diizinkan dapat menjual kelebihan jatah emisinya ke
                negara industri lain yang tidak dapat memenuhi kewajibannya.
                Clean Development Mechanism (CDM) merupakan mekanisme penurunan
                emisi GRK dalam rangka kerja sama negara industri dengan negara
                berkembang. Mekanisme ini bertujuan agar negara Annex I dapat
                mencapai target pengurangan emisi melalui program pengurangan
                emisi GRK di negara berkembang.
              </p>
              <div>
                <div className="mb-8 p-6 shadow">
                  <Image
                    src="/images/tentang/protokol-kyoto.png"
                    alt="tentang-knowledge-centre picture"
                    height={500}
                    width={1500}
                  />
                  <p className="text-center pt-4 font-light text-sm">
                    Negara Annex 1 berdasarkan ProtocolKyoto
                  </p>
                </div>
              </div>
            </div>
            <ReadNext
              cards={[
                {
                  title: "Amanat Perubahan Iklim",
                  description:
                    " Laporan Kajian Ke-5 (Assessment Reports 5 atau AR5) Intergovermental Panel on Climate Change (IPCC) menyebutkan bahwa suhu bumi telah meningkat sekitar 0,8°C selama abad terakhir. Pada akhir tahun 2100, suhu global diperkirakan akan lebih tinggi 1.8-4°C",
                  cta: {
                    href: "/tentang/amanat-pi",
                  },
                },
                {
                  title:
                    "Komitmen Indonesia Dalam Pengendalian Perubahan Iklim",
                  description:
                    "Indonesia telah terlibat aktif di tingkat internasional sebagai salah satu negara peratifikasi Konvensi Kerangka Kerja Perubahan Iklim (UNFCCC) dan Protocol Kyoto.",
                  cta: {
                    href: "/tentang/komitmen-indonesia",
                  },
                },
              ]}
            />
          </div>
        </PageLayout>
      </section>
    </main>
  );
}
