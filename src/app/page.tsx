import Image from "next/image";
import Carousel from "@/components/common/Carousel";
import { displayInfos } from "./dashboard-data";

export default function Home() {
  const titleStyle = "text-red-500 font-semibold text-3xl my-6";
  const sectionStlye = "xl:w-3/5 lg:w-3/4 px-6 py-6 mx-auto";
  return (
    <main>
      <section id="hero-img">
        <Carousel items={[]} />
      </section>

      <section className={sectionStlye}>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className={titleStyle}>Tentang Perubahan Iklim</h3>
            <p className="text-justify font-light">
              Perubahan Iklim adalah perubahan signifikan kepada iklim, suhu
              udara dan curah hujan mulai dari dasawarsa sampai jutaan tahun.
              Perubahan iklim terjadi karena meningkatnya konsentrasi gas karbon
              dioksida dan gas-gas lainnya di atmosfer yang menyebabkan efek gas
              rumah kaca.
            </p>
          </div>
          <div>
            <h4 className=" text-gray-800 font-semibold text-xl my-3">
              Penyebab Peningkatan Gas Rumah Kaca
            </h4>
            <p className="text-jusitfy font-light">
              Peningkatan konsentrasi gas rumah kaca tersebut, disebabkan oleh
              berbagai kegiatan manusia seperti emisi bahan bakar fosil,
              perubahan fungsi lahan , limbah dan kegiatan-kegiatan industri.
            </p>
            <button className=" my-6 px-14 py-4 bg-slate-800 rounded-sm text-white">
              Pelajari lebih lanjut
            </button>
          </div>
          <div className="w-full my-8">
            <iframe
              src="http://www.youtube.com/embed/L-p4Pgotk-Q?rel=0&amp;showinfo=0&amp;0autoplay=1"
              allowFullScreen={true}
              data-ruffle-polyfilled=""
              height={400}
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>

      <section className=" bg-slate-100">
        <div className={sectionStlye + " py-12"}>
          <div className="text-center p-12">
            <h3 className={titleStyle + " font-normal"}>
              Dampak Negatif Perubahan Iklim
            </h3>
            <p className="text-justify font-light">
              Perubahan iklim berdampak sangat luas pada kehidupan masyarakat.
              Kenaikan suhu bumi tidak hanya berdampak pada naiknya temperatur
              bumi tetapi juga mengubah sistem iklim yang mempengaruhi berbagai
              aspek pada perubahan alam dan kehidupan manusia. Beberapa contoh
              dampak negative perubahan iklim adalah gagal panen, cuaca ekstrim,
              dan meningkatnya wabah penyakit, seperti dijelaskan di bawah ini
            </p>
          </div>

          <div>
            <div>DISPLAY CATEGORY SELECTOR</div>
            <div>GRID POSTS 2XN</div>
          </div>
        </div>
      </section>

      <section className={sectionStlye}>
        <div className="flex justify-around gap-2">
          <div className="w-full">
            <iframe
              src="https://www.youtube.com/embed/vi23xx8GMjg"
              allowFullScreen={true}
              data-ruffle-polyfilled=""
              height={300}
              width="100%"
            ></iframe>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.youtube.com/embed/_U4fJtQkrkQ"
              allowFullScreen={true}
              data-ruffle-polyfilled=""
              height={300}
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: "images/bg2.png",
        }}
        className={"p-12 bg-green-200"}
      >
        <div className={sectionStlye}>
          <h3 className={titleStyle + " text-center text-white "}>
            Apa yang dapat kita lakukan
          </h3>
          <div className="flex justify-center gap-3">
            <div>CARD 1</div>
            <div>CARD 2</div>
            <div>CARD 3</div>
          </div>
        </div>
      </section>

      <section className="bg-red-500">
        <div className={sectionStlye}>
          <div className="flex justify-center gap-5 py-12 pb-40">
            {displayInfos.map((info) => {
              return (
                <div key={info.description}>
                  <div className="relative w-44 h-full">
                    <Image layout="fill" src={info.image} alt="info.png" />
                  </div>
                  <p className="text-sm font-light text-white py-4">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={sectionStlye}>
        <div className="flex justify-between gap-4 py-16">
          <div>
            <Image
              src="/images/landingpage/logo_pojok_iklim.png"
              alt="logo pjok iklim"
              width={800}
              height={800}
            />
          </div>
          <div>
            <p className="font-light text-justify">
              Pojok Iklim adalah forum komunikasi untuk membentuk upaya bersama
              dan sinergi upaya dari berbagai pihak pemangku kepentingan, Pojok
              Iklim ini dikelola oleh Dewan Pertimbangan Pengendalian Perubahan
              Iklim (DPPPI).
            </p>
            <div className="text-right">
              <button className="my-4 px-4 py-2 bg-blue-800 rounded text-white">
                Lihat lebih lanjut
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
