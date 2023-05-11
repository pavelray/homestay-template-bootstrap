import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className="row">
        <h2>Contact Us</h2>
        <hr />
        <div className="col-md-6 pt-5 mt-5">
          <div className="h4 pb-3">Aaltapori Homestay</div>
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
              className="btn btn-secondary"
              href="https://wa.me/918101830794"
              role="button"
            >
              Message Us on Whatsapp
            </a>
          </div>
          <div>
            <h6 className="lead">Social</h6>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/Aaltapori-Homestay-2259353944104752/"
                target="_blank"
              >
                <img src="/media/icons/004-facebook.png" />
              </a>
              <a
                href="https://www.instagram.com/aaltapori_homestay/?hl=en"
                target="_blank"
              >
                <img src="/media/icons/005-instagram.png" />
              </a>
              <a
                href="https://www.youtube.com/@jayantibuxatourguide4910"
                target="_blank"
              >
                <img src="/media/icons/006-youtube.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 mt-5">
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
