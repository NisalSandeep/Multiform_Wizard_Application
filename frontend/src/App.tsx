import { Routes, Route } from "react-router";
import Personal from "./pages/Personal";
import Skill from "./pages/Skill";
import Review from "./pages/Review";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <>
      <div className="min-h-screen page-wrap">
        <Breadcrumb />
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
