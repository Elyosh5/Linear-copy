import HeroSection from "@/components/sections/heroSection/HeroSection";
import AiSection from "@/components/sections/aiSection/AiSection";
import ProductsSection from "@/components/sections/productsSection/ProductsSection";
import PreFooterSection from "@/components/sections/preFooterSection/PreFooterSection";
import WorkflowSection from "@/components/sections/workflowSection/WorkflowSection";
import TrackingSection from "@/components/sections/trackingSection/TrackingSection";
import ProjectsSection from "@/components/sections/projectsSection/ProjectsSection";
import UnderTheHoodSection from "@/components/sections/underTheHoodSection/UnderTheHoodSection";
import CustomersSection from "@/components/sections/customersSection/CustomersSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <CustomersSection />
      <ProductsSection />
      <AiSection />
      <ProjectsSection />
      <TrackingSection />
      <WorkflowSection />
      <UnderTheHoodSection />
      <PreFooterSection />
    </>
  );
};

export default page;
