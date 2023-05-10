import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { Fragment } from "react";
import Gallary from "@/components/business/Gallary/Gallary";
import ContactUs from "@/components/business/ContactUs";
import Hr from "@/components/ui/Divider/Hr";
import Link from "next/link";
import { ImageCarousel } from "@/components/ui/CarouselV2/ImageCarousel";

const slides = [
  {
    title: "Welcome to Aaltapori Homestay",
    description: "Lorem ipsum dolor sit amet",
    url: "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Videos%2Faaltapori_outdoor1.mp4?alt=media&token=07462765-5972-4883-9c91-98d125613793",
  },
  {
    title: "Welcome to Aaltapori Homestay",
    description: "Lorem ipsum dolor sit amet",
    url: "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Videos%2Faaltapori_room1.mp4?alt=media&token=3c7ef688-919d-4b43-b9fd-ebcb7cb962fc",
  },
  {
    title: "Welcome to Aaltapori Homestay",
    description: "Lorem ipsum dolor sit amet",
    url: "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Videos%2Faaltapori_room2.mp4?alt=media&token=927cd940-2927-43fe-86f0-aeeb493b39fc",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Aaltapori Homestay : Jayanti</title>
      </Head>
      <section className={styles["carousel-container"]}>
        {/* <ImageCarousel carouselSlides={slides} /> */}
      </section>
      <div className="container">
        <section className={styles.section}>
          <h1 class="display-6 text-center">Welcome</h1>
          <div className="lead text-center">
            Welcome to your home away from home!{" "}
          </div>
          <div className="h6 p-4 text-center">
            <a
              className="btn btn-secondary"
              style={{ padding: "10px 20px" }}
              href="https://wa.me/918101830794"
              role="button"
            >
              Whatsapp
            </a>
          </div>
        </section>
        <section className={styles.section}>
          <div className={[styles["about"], "row"].join(" ")}>
            <h2>About Us</h2>
            <hr />
            <div className="pt-5">
              <div className=" card-group gap-5 text-center">
                <div className=" card border-0">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/19e634a0-1578-464a-aac3-28367f6219ed/homestay%20main.jpg/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
                    alt="Introduction"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Introduction</h5>
                    <p className="card-text" style={{ fontSize: "1rem" }}>
                      Dooars Prakriti Homestay is located in the foothill of
                      Beautiful HIMALAYA , Jayanti which is approx 15 km from
                      the Alipurduar railway station. Homestay features the
                      forest side view and is made up with full harmony with
                      Nature.The Homestay is for those, seeking luxurious rest,
                      refreshment & adventure with the loved ones. The Homestay
                      elements two beautiful Non-AC rooms with the capacity of 3
                      person in each room with the senic balcony towards
                      forest.Each room features huge well cushioned bed
                      alongside with higenic western style bathrooms attached
                      with hot water Geysers. The additional facilities of the
                      homestay includes small vivid flower garden , roped the
                      swinging hammocks and also family burnfire area. As Buxa
                      Tiger Reserve is synchorinezed with rich wildlife and high
                      altitude landscapes , habitating rare animals , birds,
                      butterflies & reptiles.Peoples with adventurous adera
                    </p>
                  </div>
                </div>
                <div className="card border-0 ">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/19e634a0-1578-464a-aac3-28367f6219ed/DSC_1418_145.JPG/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
                    alt="Activities"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Activities</h5>
                    <p className="card-text" style={{ fontSize: "1rem" }}>
                      As BUXA TIGER RESERVE is diversed with beautiful high
                      altitude mountains .So Peoples with adventurous spirit can
                      go mountain hiking with the professional. Also BUXA TIGER
                      RESERVE has large variety of fauna & flora so peoples can
                      enjoy core jungle Safari, Bird watching etc.
                    </p>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/19e634a0-1578-464a-aac3-28367f6219ed/DSC_0438.JPG/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
                    alt="Attractions"
                  />
                  <div className=" card-body">
                    <h5 className=" card-title">Attractions</h5>
                    <p className=" card-text" style={{ fontSize: "1rem" }}>
                      26 MILE CORE SAFARI 26 MIle core safari is the most
                      thrilling, wild life oriented safari into the deep dense
                      forest of buxa tiger reserve.Tourists can witness meeting
                      of animals like Elephant,Bison,leopard,deers(4types) &
                      many more that may emerge from any side of the dark forest
                      during safari. about 300 species of birds are found in
                      this jungle including peacock POKHRI LAKE Second trail is
                      the beautiful never dieing Pokhri Lake leveled at 1,100 ft
                      from sea level, set at the middle of the forest, which is
                      the only water source throughout the jungle that makes it
                      suitable water site for birds & habitating animals like
                      elephants, deers, leopard etc and lake itself provides
                      shelter for tourtles, snakes & cat fishes.LAKE can be
                      visted by vehicle to a range and short hiking about one &
                      half KM up and down to reach pokhri lake. CHUNIYA FOREST
                      SAFARI Chuniya forest safari provides safari on the vast
                      dense forest at foothill .Tourist can indulge mesmerizing
                      sight of the collections of animals from the Bhutia Busty
                      watch tower & chuniya watch tower. MAHAKAL CAVES MAHAKAL
                      CAVES are the magnificent eccentric stalactite caves,
                      which can be reached by one & half kM extreme up hill trek
                      from river bed. This trek is very popular among the
                      pilgrims who visit the cave to offer prayer to their
                      deity, Lord Shiva.. CHOTA MAHAKAL CAVES is also a
                      adventrous outdoor location, witnessing stalactite caves,
                      waterfalls, river banks, that underlies on the way to
                      mahakal caves. Chota Mahakal can be visited on vehicle on
                      winters .Condition changes during moonsoon.It take 1-2 hrs
                      to explore chota mahakal. LEPCHAKA TREK Lepchaka is the
                      beautiful, senic, buddist oriented village,leveled at
                      2,600 ft from sea level.Lepchaka is made up of full
                      harmony with nature,were peoples can enjoy senic
                      landscapes, mountain camping, many more. Trek to LEPCHAKA
                      is about 5 kms taking 3 hrs from the trekking source
                      EXPLORING MONSOON During monsoon peoples can experience
                      deep green forest , mountains garnished with pleasing
                      clouds & chilling rainfall magnifing the beauty of Jayanti
                      even more.Other activities like Monsoon Trekk , jungle
                      Safari is also conduced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.services}>
          <h2>Price List</h2>
          <hr />
          <div className="row">
            <div className="p-5">
              <h3>Rooms</h3>
              <div className="lead">
                See for yourself what makes our rooms second-to-none
              </div>
              <div className="row p-5">
                <div className="col-md-12">
                  <h5> 1. Forest side Room - 1500/night</h5>
                  <div className="lead">
                    dooars prakriti Homestay Elements two beautiful rooms each
                    room has capacity of 3 peoples max.
                  </div>
                </div>
              </div>
              <div className="row p-5">
                <div className="col-md-12">
                  <h5>1. Front side homestay Room - 1000/night</h5>
                  <div className="lead">
                    Master Bed with with the capacity of 3 person
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Reviews</h2>
          <hr />
          <div className={[styles["review"], "row"].join(" ")}>
            <div class="sk-ww-google-reviews" data-embed-id="141630"></div>
            <script
              src="https://widgets.sociablekit.com/google-reviews/widget.js"
              async
              defer
            ></script>
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
