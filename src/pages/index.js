/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import ControlledCarousel from "@/components/ui/Carousel/Carousel";
import { Fragment } from "react";
import Gallary from "@/components/business/Gallary/Gallary";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section className={styles["carousel-container"]}>
        <ControlledCarousel />
      </section>
      <div className="container">
        <section className={styles.section}>
          <div className={[styles["about"], "row"].join(" ")}>
            <div className="display-4 text-center pb-5">About Aaltapori Homestay</div>
            <div className="col-md-7">
              <p>
                ABOUT THE GREEN STAY The GreenStay is a picturesque Homestay
                with lush green surroundings nestled in the laps of nature,
                offering perfect solitude and soul healing. This place is a
                nature lover’s paradise, away from the bustling crowds, a
                perfect destination for people looking for a green holiday. What
                is around The GreenStay The region is rich in panoramic
                surprises with hills, waterfalls, beautiful valleys, spring
                water streams, coffee estates, cardamom estates, etc. Providing
                a great escape from the everyday hustle-bustle of a busy life.
                It is a perfect Homestay in Sakleshpur to relax and unwind,
                without compromising on the comforts of a hotel. You will
                wittness Lush greenery, early morning dew, bird chirps and
                complete silence. You will experience an ideal holiday with
                peaceful relaxation, authentic home-cooked meals and adventurous
                activities to reenergize yourself.
              </p>
            </div>
            <div className="col-md-5">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Hotel%2FHotel-Image-2.jpeg?alt=media&token=21e92aad-d35b-46fe-9110-89d20731f072"
                alt="about_image"
                width="100%"
              />
            </div>
          </div>
        </section>
        <hr className={styles.divider} />
        <section className={styles.section}>
          <div className="row">
            <div className="display-4 text-center pb-5">Our Rooms</div>
            <div className="col-md-12">
              <Gallary />
            </div>
          </div>
        </section>
        <hr className={styles.divider} />
        <section className={styles.services}>
          <div className="row text-center">
            <div className="display-4 text-center pb-5">Our Services</div>
            <div className="col-md-3">
              <div className="card text-bg-warning mb-3">
                <div className="card-body" style={{ height: "14rem" }}>
                  <span className="material-symbols-outlined">
                    local_parking
                  </span>
                  <h5 className="card-title">FREE PARKING</h5>
                  <p className="card-text">
                    This charming home stay features complimentary parking for
                    guests&apos; convenience..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-bg-warning mb-3">
                <div className="card-body" style={{ height: "14rem" }}>
                  <span className="material-symbols-outlined">
                    room_service
                  </span>
                  <h5 className="card-title">Room Services</h5>
                  <p className="card-text">
                    Enjoy the convenience of in-room dining with our 24-hour
                    room service option.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-bg-warning mb-3">
                <div className="card-body" style={{ height: "14rem" }}>
                  <span className="material-symbols-outlined">visibility</span>
                  <h5 className="card-title">View</h5>
                  <p className="card-text">
                    Experience breathtaking views from the comfort of your room
                    at our scenic home stay.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-bg-warning mb-3">
                <div className="card-body" style={{ height: "14rem" }}>
                  <span className="material-symbols-outlined">forest</span>
                  <h5 className="card-title">Jungle Safari</h5>
                  <p className="card-text">
                    Embark on an adventure with our jungle safari experiences,
                    available for guests at our home stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className={styles.divider} />
        <section className={styles.section}>
          <div className={[styles["review"], "row"].join(" ")}>
            <div className="display-4 text-center pb-5">What our guest says about us</div>
            <div className="col-lg-3">
              <img
                src="https://aaltapori.netlify.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAD5-WCnp-MLc1nOkL73nHwkXVwdYRilZHOpA6PRlUDCP%3Dw60-h60-p-rp-mo-ba3-br100&w=64&q=75"
                width="60"
                height="60"
                alt=""
              />
              <h5 className="fw-normal">WONDERFUL WORLD</h5>
              <div>5/5</div>
              <p>
                This is a great place in Jayanti to stay with your family.
                Homestay owner Mr Pradip Dey and his son Rajdeep both are very
                helpful. They can guide you and can make a perfect plan for your
                trip. Their behavior is very nice. We visited the place and we
                are very much satisfied. Altapori homestay is highly
                recommended.
              </p>
            </div>
            <div className="col-lg-3">
              <img
                src="https://aaltapori.netlify.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAD5-WCnp-MLc1nOkL73nHwkXVwdYRilZHOpA6PRlUDCP%3Dw60-h60-p-rp-mo-ba3-br100&w=64&q=75"
                width="60"
                height="60"
                alt=""
              />
              <h5 className="fw-normal">WONDERFUL WORLD</h5>
              <div>5/5</div>
              <p>
                This is a great place in Jayanti to stay with your family.
                Homestay owner Mr Pradip Dey and his son Rajdeep both are very
                helpful. They can guide you and can make a perfect plan for your
                trip. Their behavior is very nice. We visited the place and we
                are very much satisfied. Altapori homestay is highly
                recommended.
              </p>
            </div>
            <div className="col-lg-3">
              <img
                src="https://aaltapori.netlify.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAD5-WCnp-MLc1nOkL73nHwkXVwdYRilZHOpA6PRlUDCP%3Dw60-h60-p-rp-mo-ba3-br100&w=64&q=75"
                width="60"
                height="60"
                alt=""
              />
              <h5 className="fw-normal">WONDERFUL WORLD</h5>
              <div>5/5</div>
              <p>
                This is a great place in Jayanti to stay with your family.
                Homestay owner Mr Pradip Dey and his son Rajdeep both are very
                helpful. They can guide you and can make a perfect plan for your
                trip. Their behavior is very nice. We visited the place and we
                are very much satisfied. Altapori homestay is highly
                recommended.
              </p>
            </div>
            <div className="col-lg-3">
              <img
                src="https://aaltapori.netlify.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAD5-WCnp-MLc1nOkL73nHwkXVwdYRilZHOpA6PRlUDCP%3Dw60-h60-p-rp-mo-ba3-br100&w=64&q=75"
                width="60"
                height="60"
                alt=""
              />
              <h5 className="fw-normal">WONDERFUL WORLD</h5>
              <div>5/5</div>
              <p>
                This is a great place in Jayanti to stay with your family.
                Homestay owner Mr Pradip Dey and his son Rajdeep both are very
                helpful. They can guide you and can make a perfect plan for your
                trip. Their behavior is very nice. We visited the place and we
                are very much satisfied. Altapori homestay is highly
                recommended.
              </p>
            </div>
          </div>
          <div className={[styles["review"], "row"].join(" ")}>
            <div className="col-md-12">
              <a
                className="btn btn-secondary"
                href="https://www.google.com/travel/hotels/s/ctRdyapfk1ieng7X7"
                target="_blank"
                rel="noreferrer"
              >
                View All Reviews
              </a>
            </div>
          </div>
        </section>
        <hr className={styles.divider} />
        <section>
          <div className="display-4 text-center pb-5">Write a letter to us</div>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>WE CAN&apos;T WAIT TO SEE YOU.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Nightly rates from <cite title="Source Title">&#8377;1900</cite>
              &nbsp;per night.
            </figcaption>
          </figure>
          <div className={styles.contactForm}>
            <input
              type="text"
              value=""
              placeholder="Your Name"
              className={styles.inputBox}
            />
            <input
              type="text"
              value=""
              placeholder="Contact Number"
              className={styles.inputBox}
            />
            <textarea
              value=""
              placeholder="Message"
              className={styles.inputBox}
            ></textarea>
            <div className="btn-container">
              <button className="btn btn-secondary">ENQUIRE NOW!</button>
            </div>
          </div>
        </section>
        <hr className={styles.divider} />
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
        <hr className={styles.divider} />
      </div>
    </Fragment>
  );
}
