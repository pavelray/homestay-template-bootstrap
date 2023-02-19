import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className="row">
        <div className="display-4 text-center pb-5">Contact Us</div>
        <div className="col-md-6">
          <div className="h3 pb-3">Aaltapori Homestay</div>
          <div className="h6 pb-3">
            {" "}
            <span className="material-symbols-outlined loc-icon">
              pin_drop
            </span>{" "}
            Jayanti Bazar, West Bengal 735227
          </div>
          <div className="h6 pb-3">
            {" "}
            <span className="material-symbols-outlined">call</span> 081018 30794
          </div>
          <div className="h6 pb-3">
            Check-in: <small className="text-muted">11am</small> &nbsp;
            Check-out: <small className="text-muted">11am</small>
          </div>
          <div className="h6 pb-3">
            <a
              class="btn btn-primary"
              href="https://wa.me/918101830794"
              role="button"
            >
              Message Us on Whatsapp
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14257.181369378402!2d89.6110576!3d26.7030102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2156aaa91eba05!2sAaltapori%20Homestay!5e0!3m2!1sen!2sin!4v1674551403560!5m2!1sen!2sin"
            style={{ border: 0 }}
            width="100%"
            height="500px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
