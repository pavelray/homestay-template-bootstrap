import React from "react";

const VideoCarousel = () => {
  return (
    <div
      id="video-carousel-example2"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#video-carousel-example2"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#video-carousel-example2" data-slide-to="1"></li>
        <li data-target="#video-carousel-example2" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view hm-black-light">
            <video className="video-full" autoplay loop>
              <source
                src="https://mdbootstrap.com/images/video/Strum-Away.mp4"
                type="video/mp4"
              />
            </video>
            <div className="full-bg-img"></div>
          </div>

          <div className="carousel-caption">
            <div className="flex-center animated fadeInDown">
              <ul>
                <li>
                  <h1 className="h1-responsive">
                    Material Design for Bootstrap 4
                  </h1>
                </li>
                <li>
                  <p>The most powerful and free UI KIT for Bootstrap</p>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://mdbootstrap.com/getting-started/"
                    className="btn btn-primary btn-lg"
                    rel="noreferrer"
                  >
                    Sign up!
                  </a>
                  <a
                    target="_blank"
                    href="https://mdbootstrap.com/material-design-for-bootstrap/"
                    className="btn btn-default btn-lg"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="view hm-black-light">
            <video className="video-full" autoplay loop>
              <source
                src="https://mdbootstrap.com/images/video/Beach-Ball.mp4"
                type="video/mp4"
              />
            </video>
            <div className="mask"></div>
          </div>

          <div className="carousel-caption">
            <div className="flex-center animated fadeInDown">
              <ul>
                <li>
                  <h1 className="h1-responsive">
                    Lots of tutorials at your disposal
                  </h1>
                </li>
                <li>
                  <p>And all of them are FREE!</p>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://mdbootstrap.com/bootstrap-tutorial/"
                    className="btn btn-primary btn-lg"
                    rel="noreferrer"
                  >
                    Start learning
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="view hm-black-strong">
            <video className="video-full" autoplay loop>
              <source
                src="https://mdbootstrap.com/images/video/Nature-Sunset.mp4"
                type="video/mp4"
              />
            </video>
            <div className="mask"></div>
          </div>

          <div className="carousel-caption">
            <div className="flex-center animated fadeInDown">
              <ul>
                <li>
                  <h1 className="h1-responsive">Visit our support forum</h1>
                </li>
                <li>
                  <p>Our community can help you with any question</p>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://mdbootstrap.com/forums/forum/support/"
                    className="btn btn-default btn-lg"
                    rel="noreferrer"
                  >
                    Support forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <a
        className="left carousel-control"
        href="#video-carousel-example2"
        role="button"
        data-slide="prev"
      >
        <span className="icon-prev" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#video-carousel-example2"
        role="button"
        data-slide="next"
      >
        <span className="icon-next" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default VideoCarousel;
