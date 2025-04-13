import React, { lazy, Suspense } from "react";

// Lazy load components
const Header = lazy(() => import("../components/header/Header"));
const Hero = lazy(() => import("../components/Hero/Hero"));
const PaymentCollection = lazy(() =>
  import("../components/PaymentCollection/PaymentCollection")
);
const TaskManager = lazy(() => import("../components/TaskManager/TaskManager"));
const Contact = lazy(() => import("../components/ContactUs/Contact"));
const Footer = lazy(() => import("../components/Footer/Footer"));

function Home() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-10 text-xl text-purple-500">
          Loading...
        </div>
      }
    >
     
      
      
      <Header />
      <Hero />
      <PaymentCollection />
      <TaskManager />
        <Contact />
      <Footer />
      
    </Suspense>
  );
}

export default Home;
