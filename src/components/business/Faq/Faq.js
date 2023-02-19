import Hr from "@/components/ui/Divider/Hr";
import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <div className="row">
      <div className="col-md-12 mt-5">
        <h3 className="pb-5">FREQUENTLY ASKED QUESTIONS</h3>
        <div className="row">
          <div className="col-md-5">
            <Image
              alt="Hotel_image"
              width="400"
              height="300"
              src="https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Hotel%2Fhero-image.jpeg?alt=media&token=3240e618-ce04-4eca-ba3e-c5050d852b9b"
            />
          </div>
          <div className="col-md-6">
            <ul>
              <li>Age below 5 years- No Charge.</li>
              <li>5 years to 10 years- 1400/-.</li>
              <li>Drivers-500/-.</li>
              <li>Only accommodation- 1000/-.</li>
              <li>
                To confirm the booking we take approximately 50% of the advance
                amount on the tariff. Let us know before you transfer/deposit
                the advance payment since we release the booking first come
                first serve, based on amount credited time and date. Once it is
                confirmed we will block it and send you the acknowledgement via
                email.
              </li>
              <li>The prices are inclusive of service taxes.</li>
              <li>All the prices are per person and per day basis.</li>
              <li>The prices are subject to change without prior notice.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
