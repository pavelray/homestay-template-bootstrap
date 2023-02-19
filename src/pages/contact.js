import ContactUs from "@/components/business/ContactUs";
import Faq from "@/components/business/Faq/Faq";
import Hr from "@/components/ui/Divider/Hr";
import React from "react";

const contact = () => {
  return (
    <div className="container">
      <Faq />
      <Hr />
      <ContactUs />
      <Hr />
    </div>
  );
};

export default contact;
