// css & icons
import "./App.css";
// components
import Header from "./components/Header";
import Section01 from "./components/Section01";
import UniversalFrontend from "./components/UniversalFrontend";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import ComplianceArchitecture from "./components/ComplianceArchitecture";
import Section06 from "./components/Section06";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden bg-white text-ink">
      <Header />
      <main>
        <Section01 />
        <UniversalFrontend />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <ComplianceArchitecture />
        <Section06 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
