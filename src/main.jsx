import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import ImpressumPage from "./pages/ImpressumPage.jsx";
import ChangelogPage from "./pages/ChangelogPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="impressum" element={<ImpressumPage />} />
        <Route path="changelog" element={<ChangelogPage />} />
        <Route path="faq" element={<FAQPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
