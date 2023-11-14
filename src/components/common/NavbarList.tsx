import Link from "next/link";
export default function NavList(props: any) {
  return (
    <ul className={props.className}>
      <Link href="/">Tentang</Link>
      <Link href="/">Info Iklim</Link>
      <Link href="/">Aksi</Link>
      <Link href="/">Sumber Daya</Link>
      <Link href="/">Inovasi</Link>
      <Link href="/">Hasil Kerjasama</Link>
      <Link href="/">Kawal Karbon</Link>
    </ul>
  );
}
