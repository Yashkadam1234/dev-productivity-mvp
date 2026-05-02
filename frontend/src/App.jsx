import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeveloperList from "./pages/DeveloperList";
import Profile from "./pages/Profile";
import ManagerSummary from "./pages/ManagerSummary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeveloperList />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/manager" element={<ManagerSummary />} />
      </Routes>
    </BrowserRouter>
  );
}