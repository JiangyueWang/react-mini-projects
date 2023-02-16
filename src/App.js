import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ImageCarouselPage from "./pages/ImageCarouselPage/ImageCarouselPage"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/imgCarousel" element={<ImageCarouselPage />}/>
      </Routes>
    </div>

  );
}

export default App;
