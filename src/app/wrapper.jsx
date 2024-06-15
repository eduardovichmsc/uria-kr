import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Wrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
