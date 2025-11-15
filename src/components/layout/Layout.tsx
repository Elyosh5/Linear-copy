import React, { FC, ReactNode } from "react";
import Header from "./header/Header";
import "./Layout.css";

interface layout {
  children: ReactNode;
}

import Footer from "./footer/Footer";

const Layout: FC<layout> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
