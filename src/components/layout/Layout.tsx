import React, { FC, ReactNode } from "react";
import Header from "./header/Header";
import HeroSection from "../sections/heroSection/HeroSection";
import "./Layout.css";

interface layout {
  children: ReactNode;
}

// import CustomersSection from "../sections/customersSection/CustomersSection";
// import ProductsSection from "../sections/productsSection/ProductsSection";
// import ProjectsSection from "../sections/projectsSection/ProjectsSection";
// import TrackingSection from "../sections/trackingSection/TrackingSection";
// import AiSection from "../sections/aiSection/AiSection";
// import WorkflowSection from "../sections/workflowSection/WorkflowSection";
// import UnderTheHoodSection from "../sections/underTheHoodSection/UnderTheHoodSection";
// import PreFooterSection from "../sections/preFooterSection/PreFooterSection";
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
