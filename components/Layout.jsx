import Head from "next/head";
import Footer from "@/Footer";
import NavBar from "@/NavBar";
import Disucss from "@/Disucss";

export default function Layout({ children }) {
  return (
    <div className="relative ">
      <Head>
        <title>Titta Digital</title>
      </Head>
      <NavBar />
      <main className="max-w-full min-h-screen">{children}</main>
      <Disucss />
      <Footer />
    </div>
  );
}
