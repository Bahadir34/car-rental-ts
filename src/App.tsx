import React, { type FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/not-found";
 

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Arkaplan */}
        <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-black-100 to-dark-bg -z-10"></div>

        {/* Isik huzmeleri */}
        <div className="fixed top-20 left-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl animate-pulse" />
        <div
          style={{ animationDelay: "3000ms", animationDuration: "2400ms" }}
          className="fixed bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 delay-200 animate-pulse"
        />

        <Header />
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
