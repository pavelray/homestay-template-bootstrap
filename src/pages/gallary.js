import Gallary from "@/components/business/Gallary/Gallary";
import Hr from "@/components/ui/Divider/Hr";
import React from "react";

const gallary = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <h3 className="pb-5">Rooms</h3>
        <div className="col-md-12">
          <Gallary count={5} containerName="Rooms" />
        </div>
      </div>
      <Hr />
      <div className="row">
        <h3 className="pb-5">Outdoor</h3>
        <div className="col-md-12">
          <Gallary count={5} containerName="Hotel" />
        </div>
      </div>
      <Hr />
      <div className="row">
        <h3 className="pb-5">Guests</h3>
        <div className="col-md-12">
          <Gallary count={5} containerName="Guests" />
        </div>
      </div>
      <Hr />
    </div>
  );
};

export default gallary;
