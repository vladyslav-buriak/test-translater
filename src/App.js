import "./index.scss";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import MyProgress from "./pages/MyProgress";
import GamePage from "./pages/GamePage";
import { Layout } from "./Layout";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-results" element={<MyProgress />} />
          <Route path="/intarective" element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
