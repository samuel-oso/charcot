import React from "react";
import Nav from "../components/Nav";
import hero_bg from "../Images/hero_bg.avif";
import arrow from "../Images/arrow.svg";

const Hero = () => {
  return (
    <section className="section">
      <img src={hero_bg} className="hero_bg" alt="hero_bg" />
      <Nav />
      <div>
        <div className="hero_center">
          <div className="hero_title">
            <h2>b</h2>
            <h2>e</h2>
            <h2>y</h2>
            <h2>o</h2>
            <h2>n</h2>
            <h2>d </h2>
            <span />
            <h2>e</h2>
            <h2>x</h2>
            <h2>p</h2>
            <h2>l</h2>
            <h2>o</h2>
            <h2>r</h2>
            <h2>a</h2>
            <h2>t</h2>
            <h2>i</h2>
            <h2>o</h2>
            <h2>n</h2>
          </div>
          <div className="hero_subtitle">
            <p>Abroad the World's Only Luxury Icebreaker</p>
          </div>
          <div className="hero_text">
            <p>The white paradise welcomes you to its sanctuary. </p>
            <p>Discover its immensity, its unexplored wonders. </p>
            <p>Voyage to the absolute on an environmentally friendly </p>
            <p>and respectful polar odyssey.</p>
          </div>
        </div>
        <div className="hero_footer">
          <button className="hero_footer_btn">
            <p>start the adventure</p>
            <span className="hero_footer_img">
              <img src={arrow} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
