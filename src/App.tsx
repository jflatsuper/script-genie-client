import { BrowserRouter, Routes, Route } from "react-router";
import DashboardContainer from "./DashboardContainer";
import "./App.css";
import { FC } from "react";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
