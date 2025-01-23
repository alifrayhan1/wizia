import "./App.css";
import Carousel from "./Component/Advice";
import Bannar from "./Component/Bannar";
import Effort from "./Component/Effort";
import Features from "./Component/Features";
import Footer from "./Component/Footer";
import NavbarArea from "./Component/Navbar";
import NewEra from "./Component/NewEra";
import Partner from "./Component/Partner";
import Prefer from "./Component/Prefer";

function App() {
  return (
    <>
      <main>
        <NavbarArea />
        <Bannar />
        <Partner />
        <Features />
        <Prefer />
        <Carousel />
        <Effort/>
        <NewEra/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
