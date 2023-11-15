import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
