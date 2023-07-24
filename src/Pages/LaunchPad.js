import React from "react";
import Navbar1 from "../Components/Header";
import "../Styles/Bridge.css";
import launchpadimage from "../Images/LaunchPad.jpg";
import zethanlogo from "../Images/zethanlogo.png";
import { withTheme } from "@emotion/react";
import Footer from "../Components/Footer";

const LaunchPad = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Navbar1 />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="Upcoming">
            <h2
              style={{
                color: "white",
                paddingTop: "4rem",
                paddingBottom: "2rem",
              }}
            >
              Upcoming
            </h2>
          </div>
          <div className="MainDiv_LaunchPad" style={{ paddingBottom: "2rem" }}>
            <div className="LaunchpadImage">
              <div className="ImageLaunch" style={{ overflow: "hidden" }}>
                <a href="">
                  {" "}
                  <img
                    className="LAunch_Pad"
                    style={{
                      borderRadius: "10px",
                      transition: " transform.2s",
                    }}
                    src={launchpadimage}
                    alt=""
                    width={"100%"}
                  />
                </a>
              </div>
              <div className="Gamefi">
                <a href="">
                  <button
                    style={{
                      padding: "7px",
                      border: "none",
                      borderRadius: "24px",
                      width: "7rem",
                      background: "black",
                      paddingTop: "10px",
                    }}
                  >
                    <h6 style={{ color: "white" }}>Gamefi</h6>
                  </button>
                </a>
              </div>
              <div className="Closed">
                <a href="">
                  <button
                    style={{
                      padding: "7px",
                      border: "none",
                      borderRadius: "24px",
                      width: "7rem",
                      background: "black",
                      paddingTop: "10px",
                    }}
                  >
                    <h6 style={{ color: "white" }}>Closed</h6>
                  </button>
                </a>
              </div>
              <div className="Logo_Button">
                <a href="">
                  <img
                    style={{ paddingTop: "2rem" }}
                    src={zethanlogo}
                    alt=""
                    width={"10%"}
                  />
                </a>
              </div>
              <div className="ZethanHeaders">
                <h5 style={{ color: "white", paddingTop: "1rem" }}>Zethan</h5>
              </div>
              <div className="ZethanHeader">
                <p style={{ color: "white" }}>
                  Zethan is next-generation gaming and NFT <br /> ecosystem
                  bringing gamers together on <br /> Zksync.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LaunchPad;
