"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import ReadNext from "../ReadNext";

export default function AmanatPI() {
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
              label: "Komitmen Indonesia",
            },
          ]}
          className="my-12"
        >
          <div className="">
            <Typography variant="h3" className="mb-6 font-bold">
              Komitmen Indonesia Dalam Pengendalian Perubahan Iklim
            </Typography>
            <div className="font-light text-justify">
              <p className="mb-8">
                Pembangunan merupakan upaya setiap Negara untuk mewujudkan
                negara yang berdaulat, kuat dan rakyat yang sejahtera. Undang
                -Undang Republik Indonesia Dasar Tahun 1945 mengamanatkan bahwa
                negara harus menyediakan penghidupan yang layak bagi warga
                negara, untuk bertempat tinggal, mendapatkan lingkungan hidup
                yang baik, sehat, serta berhak memperoleh pelayanan kesehatan
                dan akses pendidikan. Hal ini sejalan dengan peran aktif
                Indonesia dalam setiap agenda pengendalian perubahan iklim
                sebagai amanat konstitusi.
              </p>
              <p className="mb-8">
                Diskusi internasional juga menegaskan bahwa upaya pengendalian
                perubahan iklim dilakukan dengan mempertimbangkan national
                circumstances (termasuk kondisi dan kapasitas Negara) dan
                keadaulatan (sovereignty) Negara. Negara memberikan arah dan
                berkewajiban memastikan agar pembangunan yang dibutuhkan untuk
                memenuhi kesejahteraan rakyat tetap memperhatikan perlindungan
                aspek lingkungan dan sosial. Komitmen dan kontribusi Indonesia
                dalam penurunan emisi gas rumah kaca dilakukan adalah atas dasar
                sukarela (voluntary), penuh rasa tanggung jawab, dan sesuai
                dengan kemampuan masing-masing Negara (sesuai dengan prinsip
                &idquot;common but differentiated responsibilities – respected
                capabilities/CBDR-RC&idquot;).
              </p>
              <p className="mb-8">
                Indonesia telah terlibat aktif di tingkat internasional sebagai
                salah satu negara peratifikasi Konvensi Kerangka Kerja Perubahan
                Iklim (UNFCCC) dan Protocol Kyoto. Pemerintah Indonesia telah
                meratifikasi Konvensi Perubahan Iklim melalui Undang-Undang
                Nomor 6 Tahun 1994 tentang Pengesahan United Nations Framework
                Convention on Climate Change (Konvensi Kerangka Kerja
                Perserikatan Bangsa-Bangsa tentang Perubahan Iklim) dan termasuk
                dalam negara Non-Annex I. Dengan demikian Indonesia secara resmi
                terikat dengan kewajiban dan memiliki hak untuk memanfaatkan
                berbagai peluang dukungan yang ditawarkan UNFCCC atau Kerangka
                Kerja PBB dalam upaya mencapai tujuan konvensi tersebut.
              </p>
              <p className="mb-8">
                Indonesia juga menunjukkan peran pentingnya di tingkat dunia
                sebagai tuan rumah COP-13 tahun 2007 di Bali yang diantaranya
                menghasilkan Bali Action Plan yang menempatkan peran penting
                hutan Indonesia melalui pelaksanaan skema REDD+ serta dengan
                dihasilkannya studi IFCA (Indonesia Forest Climate Alliance).
                Bali Action Plan diantaranya menyepakati adanya Policy
                Approaches and Positive Incentives for REDD+ in Developing
                Countries yang memungkinkan untuk memberikan solusi terhadap
                deforestasi di negara berkembang agar dapat dikurangi, namun
                tetap dapat melanjutkan pembangunan nasionalnya.
              </p>

              <div className="mb-8 p-6 shadow">
                <Image
                  src="/images/tentang/komitmen-indonesia.jpg"
                  alt="tentang-knowledge-centre picture"
                  height={500}
                  width={1500}
                />
                <p className="text-center pt-4 font-light text-sm">
                  Heads of delegations at the 2015 United Nations Climate Change
                  Conference which established the Paris Agreement.
                </p>
              </div>

              <p className="mb-8">
                Komitmen dan Kontribusi Indonesia kembali ditunjukkan dengan
                meratifikasi Perjanjian Pari di New York pada tanggal 22 April
                2016, Indonesia menandatangani Perjanjian Paris di New York.
                Sebagai negara peratifikasi, Indonesia berkomitmen untuk
                melakukan upaya menurunkan emisi gas rumah kaca dan bergera
                aktif mencegah terjadinya perubahan iklim. Perjanjian Paris juga
                memposisikan hutan sebagai kunci dari upaya penurunan gas rumah
                kaca. Hal ini mengingat kemampuan hutan menyerap gas rumah kaca.
                Posisi ini tersirat dari ketentuan pasal 5 Paris Agreement yang
                mendorong negara-negara pihak untuk menerapkan dan mendukung
                kerangka kerja berdasarkan perjanjian untuk kegiatan-kegiatan
                terkait reducing emission from deforestation and forest
                degradation dan konservasi serta pengelolaan hutan yang
                didasarkan pada prinsip keberlanjutan.
              </p>
              <div className="mb-8 p-6 shadow">
                <Image
                  src="/images/tentang/komitmen-indonesia2.jpg"
                  alt="tentang-knowledge-centre picture"
                  height={500}
                  width={1500}
                />
                <p className="text-center pt-4 font-light text-sm">
                  Menteri Lingkungan Hidup dan Kehutanan Indonesia pada acara
                  Paris Agreement
                </p>
              </div>
              <p className="mb-8">
                Pemerintah Indonesia juga telah menerbitkan Undang-Undang No 16
                tahun 2016 tentang Ratifikasi Perjanjian Paris. Pemerintah
                Indonesia dengan 9 (sembilan) aksi prioritas pembangunan
                nasional yang dituangkan melalui Nawa Cita merupakan komitmen
                nasional menuju arah pembangunan rendah karbon dan berketahanan
                iklim, dengan adaptasi dan mitigasi perubahan iklim sebagai satu
                prioritas yang terintegrasi dan lintas-sektoral dalam agenda
                Pembangunan Nasional. Komitmen yang tertuang dalam Nawa Cita
                menjadi dasar bagi penyusunan dokumen the First Nationally
                Determined Contribution (NDC) Indonesia yang telah disampaikan
                kepada United Nations Framework Convention on Climate Change
                (UNFCCC) pada bulan November 2016. First NDC Indonesia
                menguraikan transisi Indonesia menuju masa depan yang rendah
                emisi dan berketahanan iklim.
              </p>
              <p className="mb-8">
                NDC dipergunakan sebagai salah satu acuan pelaksanaan komitmen
                mitigasi perubahan iklim dengan rencana penurunan emisi hingga
                tahun 2030 sebesar 29% sampai dengan 41% bila dengan dukungan
                internasional, dengan proporsi emisi masing-masing sektor yang
                meliputi: kehutanan (17.2%), energi (11%), pertanian (0.32%),
                industri (0.10%), dan limbah (0.38%). Sedangkan untuk adaptasi,
                komitmen Indonesia meliputi peningkatan ketahanan ekonomi,
                ketahanan sosial dan sumber penghidupan, serta ketahanan
                ekosistem dan lansekap.Dalam upaya tersebut, sesuai dengan
                kewajiban/komitmen negara, telah direncanakan NDC upaya mitigasi
                dan adaptasi perubahan iklim sebagai aksi yang terintegrasi
                untuk membangun ketahanan dalam menjaga sumber daya pangan, air,
                dan energi.
              </p>
            </div>
            <Typography variant="h5" className="mb-6 font-normal">
              Kementerian Lingkungan Hidup dan Kehutanan
            </Typography>
            <div className="font-light text-justify">
              <p className="mb-8">
                Peraturan Presiden No 16 tahun 2015 membawa konsekuensi
                penggabungan Kementerian Lingkungan Hidup, Kementerian
                Kehutanan, Dewan Nasional Perubahan Iklim dan Badan Pengelola
                REDD+ ke dalam Kementerian Lingkungan Hidup dan Kehutanan yang
                dioperasionalkan lebih lanjut melalui Peraturan Menteri
                Lingkungan Hidup dan Kehutanan No 18 tahun 2015. Kementerian
                Lingkungan Hidup dan Kehutanan melalui Direktur Jenderal
                Pengendalian Perubahan Iklim bertugas untuk menyelenggarakan
                perumusan dan pelaksanaan kebijakan di bidang pengendalian
                perubahan iklim dalam mewujudkan komitmen Indonesia dalam
                penurunan emisi baik di tingkat nasional maupun internasional.
                Pengendalian perubahan iklim di Indonesia memerlukan proses
                nasional dan internasional yang bersifat iterative dan sinergis.
                Implementasi dari kesepakatandi tingkat internasional tersebut
                memerlukan penterjemahan ke dalam konteks pembangunan nasional,
                termasuk penerjemahan ratifikasi Perjanjian Paris dan NDC
                melalui aksi Mitigasi dan Adaptasi. Penerjemahan ke dalam
                konteks nasional dimaksudkan untuk mendukung pembangunan yang
                berkelanjutan dan mengarusutamakan prinsip rendah emisi dan
                resilien terhadap perubahan iklim. Efektifitas pengendalian
                perubahan iklim juga sangat bergantung pada kebijakan dan
                implementasinya di semua tingkat (internasional, regional,
                nasional, dan sub nasional).
              </p>
              <div className="mb-8 p-6 shadow">
                <Image
                  src="/images/tentang/komitmen-indonesia3.jpg"
                  alt="tentang-knowledge-centre picture"
                  height={500}
                  width={1500}
                />
                <p className="text-center pt-4 font-light text-sm">
                  Nur Masripatin, Direktur Jenderal Pengendalian Perubahan Iklim
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
            <div className="py-4 px-2 shadow w-full md:basis-1/2 grow">
              <iframe
                src="https://www.youtube.com/embed/S6En2UKGEH8?si=zQ5OtLswF4b-wvaU"
                title="YouTube video player"
                allowFullScreen={true}
                data-ruffle-polyfilled=""
                height={200}
                width="100%"
              ></iframe>
              <p className="text-xs pt-4 font-light text-center">
                komitmen indonesia
              </p>
            </div>
            <p className="text-justify font-light">
              Sebagai National Focal Point Pengendalian Perubahan Iklim di
              Indonesia, Kementerian Lingkungan Hidup dan Kehutanan melalui
              Direktorat Jenderal Pengendalian Perubahan Iklim membuat suatu
              wadah pengetahuan untuk masyarakat luas di Indonesia. Wadah ini
              dikemas dalam bentuk Knowledge Centre yang berisi pengetahuan
              tentang penyebab, dampak dan potensi perubahan iklim di Indonesia.
            </p>
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
