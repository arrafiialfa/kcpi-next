import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0  w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
      <div className=" text-sm px-4 xl:w-3/5 lg:w-3/4 md:w-4/5 mx-auto flex  justify-center gap-x-6 ">
        <div className="basis-1/3">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="LOGO"
              width={300}
              height={100}
            ></Image>
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-slate-600">
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
    </nav>
  );
}
