import React from "react";

import Header from "./Header";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";
import CustomerReviews from "./CustomerReviews";
import TrendingSection from "./TrendingSection";
import BestRated from "./BestRated";

const LandingPage: React.FC = () => {
  return (
    <div className="h-full">
      <Header />
      <TrendingSection />
      <WhyChooseUs />
      <BestRated />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
