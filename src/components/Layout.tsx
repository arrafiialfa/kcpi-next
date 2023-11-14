import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default function Layout({
  children,
  useBreadCrumb,
}: Readonly<{
  children: React.ReactNode;
  useBreadCrumb: boolean;
}>) {
  return (
    <>
      <Navbar />
      <div>
        {useBreadCrumb && <div>breadcrumbs</div>}
        {children}
      </div>
      <Footer />
    </>
  );
}
