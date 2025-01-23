import "./App.css";
import TestimonialCarousel from "./Component/Advice";
import Bannar from "./Component/Bannar";
import Effort from "./Component/Effort";
import Features from "./Component/Features";
import NavbarArea from "./Component/Navbar";
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
        <TestimonialCarousel />
        <Effort/>
      </main>
    </>
  );
}

export default App;
