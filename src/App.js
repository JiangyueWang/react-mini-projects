import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ImageCarouselPage from "./pages/ImageCarouselPage/ImageCarouselPage";
import ReactHooks from "./pages/ReactHooksPage/ReactHooks"; 
import UseRefComponent from "./components/Hooks/useRef/UseRefComponent";
import FaqPage from "./pages/FaqPage/FaqPage";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/imgCarousel" element={<ImageCarouselPage />}/>
        <Route path="/faq" element={<FaqPage />}/>
        <Route path="/hooks" element={<ReactHooks />}/>
        <Route path="/hooks/useRef" element={<UseRefComponent  />}/>
      </Routes>
    </div>

  );
}

export default App;
