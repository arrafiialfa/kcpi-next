import Image from "next/image";
import { displayInfos, displayActions } from "./dashboard-data";
import HeroSlider from "@/components/dashboard/HeroSlider";
import Card from "@/components/common/Card";
import PostsByCategory from "@/components/dashboard/PostsByCategory";

export default function Home() {
  const titleStyle = "text-red-500 font-semibold text-3xl my-6";
  const sectionStlye = "xl:w-3/5 lg:w-3/4 px-6 py-12 md:py-24 mx-auto";

  return (
    <main>
      <section id="hero-img">
        <header className="pt-28 pb-12">
          <HeroSlider />
        </header>
      </section>

      <section className={sectionStlye}>
        <div className="flex flex-col md:flex-row lg:flex-col gap-x-6 gap-y-8">
          <div className=" basis-1/2">
            <div>
              <h3 className={titleStyle}>Tentang Perubahan Iklim</h3>
              <p className="text-justify font-light">
                Perubahan Iklim adalah perubahan signifikan kepada iklim, suhu
                udara dan curah hujan mulai dari dasawarsa sampai jutaan tahun.
                Perubahan iklim terjadi karena meningkatnya konsentrasi gas
                karbon dioksida dan gas-gas lainnya di atmosfer yang menyebabkan
                efek gas rumah kaca.
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
              <button className=" my-6 px-8 py-2 bg-gray-700 hover:bg-gray-500 rounded text-white">
                Pelajari lebih lanjut
              </button>
            </div>
          </div>
          <div className="w-full grow basis-1/2">
            <iframe
              src="https://www.youtube.com/embed/L-p4Pgotk-Q?rel=0&amp;showinfo=0&amp;0autoplay=1"
              allowFullScreen={true}
              data-ruffle-polyfilled=""
              height={400}
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>

      <section className=" bg-gray-100">
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
            <PostsByCategory />
          </div>
        </div>
      </section>

      <section>
        <div className={"flex justify-around gap-2 " + sectionStlye}>
          <div className="w-full">
            <iframe
              className="rounded shadow-md"
              src="https://www.youtube.com/embed/vi23xx8GMjg"
              allowFullScreen={true}
              data-ruffle-polyfilled=""
              height={300}
              width="100%"
            ></iframe>
          </div>
          <div className="w-full">
            <iframe
              className="rounded shadow-md"
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
        style={{ backgroundImage: `url("/images/landingpage/bg2.png")` }}
        className={"px-12 md:py-12"}
      >
        <div className={sectionStlye}>
          <h3
            className={
              "font-semibold text-4xl my-6 text-center text-white md:mb-24 p-4"
            }
          >
            Apa yang dapat kita lakukan ?
          </h3>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            {displayActions.map((info) => {
              return (
                <Card
                  key={info.title}
                  title={info.title}
                  image={info.image}
                  description={info.description}
                  cta={info.cta}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-red-500">
        <div className={" xl:w-3/5 lg:w-3/4 px-6 py-12  mx-auto "}>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            {displayInfos.map((info) => {
              return (
                <div
                  className="grid grid-cols-2 shadow py-3 px-2 w-full"
                  key={info.description}
                >
                  <div className="md:col-span-2">
                    <Image
                      height={150}
                      width={150}
                      src={info.image}
                      alt="info.png"
                    />
                  </div>
                  <p className="md:col-span-2 text-sm font-light text-left text-white py-4">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={sectionStlye}>
        <div className="flex flex-wrap justify-center sm:justify-around gap-x-4 gap-y-6  py-16">
          <div className="basis-2/5 sm:basis-1/3 lg:items-center ">
            <Image
              src="/images/landingpage/logo_pojok_iklim.png"
              alt="logo pjok iklim"
              width={250}
              height={250}
            />
          </div>
          <div className="basis-3/5 grow">
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
