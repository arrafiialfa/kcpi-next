import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className=" w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static   lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="px-4 xl:w-3/5 lg:w-3/4 mx-auto sticky top-0 flex  justify-center gap-4 ">
        <div className="basis-2/3">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="LOGO"
              width={300}
              height={100}
            ></Image>
          </Link>
        </div>
        <Link href="/">Beranda</Link>
        <Link href="/">Tentang</Link>
        <Link href="/">Info Iklim</Link>
        <Link href="/">Aksi</Link>
        <Link href="/">Sumber Daya</Link>
        <Link href="/">Inovasi</Link>
        <Link href="/">Hasil Kerjasama</Link>
        <Link href="/">Kawal Karbon</Link>
      </div>
    </div>
  );
}
