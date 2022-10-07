import { Routes, Route } from "react-router-dom";
import { Home, HeroDetails, NotFound } from "../pages";

import "./App.css";
import { SharedLayout } from "/";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<HeroDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
