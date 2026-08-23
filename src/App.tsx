// css & icons
import "./App.css";
// components
import Header from "./components/Header";
import Section01 from "./components/Section01";
import UniversalApp from "./components/UniversalApp";
import ProductFamily from "./components/ProductFamily";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import ComplianceArchitecture from "./components/ComplianceArchitecture";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden bg-[#f8f5ee] text-ink">
      <Header />
      <main>
        <Section01 />
        <UniversalApp />
        <ProductFamily />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <ComplianceArchitecture />
      </main>
      <Footer />
    </div>
  );
}

export default App;
