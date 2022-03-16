import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.scss';
import Layout from "./pages/layout";
import Home from "./pages/home";
import Items from "./pages/items";
import Detail from "./pages/detail";
import NoPage from "./pages/no_page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);