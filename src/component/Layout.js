import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ padding: "20px", minHeight: "80vh" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;