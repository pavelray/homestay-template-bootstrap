/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import ControlledCarousel from "@/components/ui/Carousel/Carousel";
import { Fragment } from "react";
import Gallary from "@/components/business/Gallary/Gallary";
import ContactUs from "@/components/business/ContactUs";
import Hr from "@/components/ui/Divider/Hr";
import Link from "next/link";

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
            <div className="display-5 text-center pb-5">
              About Aaltapori Homestay
            </div>
            <div className="col-md-8">
              <p>
                Far away from the hustle bustle of the city, the homestay offers
                a majestic view of the evergreen surroundings. The homestay acts
                as a perfect gateway to spend memorable and Quality time with
                family and friends at a pocket friendly budget.
                <br />
                <br />
                Relax and enjoy your holidays at our homestay. With pleasant
                temperature throughout the year the place is a marvel for nature
                lovers which for sure will attract you back to this place.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Hotel%2FHotel-Image-2.jpeg?alt=media&token=21e92aad-d35b-46fe-9110-89d20731f072"
                alt="about_image"
                width="100%"
                height="75%"
              />
            </div>
          </div>
        </section>
        <Hr />
        <section className={styles.services}>
          <div className="row text-center">
            <div className="display-5 text-center pb-2">Facilities</div>
            <p className="text-center pb-5">
              With a wide array of facilities we make sure the guest have a
              peaceful, comfortable and a memorable stay.
            </p>
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
        <Hr />
        <section className={styles.section}>
          <div className="row">
            <div className="display-4 text-center pb-5">Our Rooms</div>
            <div className="col-md-12">
              <Gallary count="5" />
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-md-12">
              <Link className="btn btn-secondary" href="/gallary">
                View All
              </Link>
            </div>
          </div>
        </section>
        <Hr />

        <section className={styles.section}>
          <div className={[styles["review"], "row"].join(" ")}>
            <div className="display-4 text-center pb-5">
              What our guest says about us
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
        <Hr />
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
        <Hr />
        <ContactUs />
        <Hr />
      </div>
    </Fragment>
  );
}
