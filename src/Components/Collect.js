import React, { useState } from "react";
import crossarrow from "../Images/Cross_Arrow.svg";
import collect1 from "../Images/collection_image_1.png";
import AlienRaidStarShip from "../Images/Alien_Raid_StarShip.svg";
import starship from "../Images/starship.png";

const Collect = () => {
  const data = [
    {
      img: collect1,
    },
    {
      img: collect1,
    },

    {
      img: collect1,
    },

    {
      img: collect1,
    },
  ];

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3" style={{ paddingTop: "15px" }}>
            <div
              className="Main_Box_Div"
              style={{
                border: "2px solid rgb(151 134 134 / 15%)",
                padding: "9px",
                borderRadius: "5px",
              }}
            >
              <div className="Main_Collect1_Box">
                <div
                  style={{ position: "relative" }}
                  className="Collect_image"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    src={collect1}
                    alt=""
                    width={"100%"}
                    style={{
                      paddingBottom: "1rem",
                      paddingTop: "",
                      borderRadius: "5px",
                    }}
                  />

                  {isHovering ? (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <a href="">
                        <button
                          style={{
                            padding: "6px",
                            width: "6rem",
                            border: "none",
                          }}
                        >
                          Rent
                        </button>
                      </a>
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "10px",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "30px",
                        left: "15px",
                      }}
                    >
                      <img src={starship} width={30} />
                    </div>
                  )}
                </div>
                <div className="Rent_parag"></div>
                <div className="level_31">
                  <h6 style={{ color: "white" }}>level 31</h6>
                </div>
              </div>
              <div
                className="Aliean_Raid_Starship"
                style={{
                  color: "white",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div className="Aliean_Paragraph">
                  <h6 style={{ fontSize: "15px" }}>Alien Raid Starship</h6>
                  <p style={{ fontStyle: "12px" }}>Alien Raid Starship #5411</p>
                </div>
                <div className="Collect_image">
                  <img
                    style={{ paddingLeft: "34px" }}
                    src={AlienRaidStarShip}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="Jet_Power_Accuracy"
                style={{
                  display: "flex",
                  color: "white",
                  gap: "45px",
                  flexWrap: "wrap",
                  border: "2px solid",
                  padding: "10px 13px",
                  borderRadius: "10px",
                  height: "73px",
                  textAlign: "center",
                  border: "none",
                }}
              >
                <div className="Jet_Power">
                  <h6>Jet Power</h6>
                  <p style={{ textAlign: "start" }}>120</p>
                </div>
                <div className="Accuracy">
                  <h6>Accuracy</h6>
                  <p style={{ textAlign: "start" }}>80%</p>
                </div>
                <div className="Buy">
                  <h6>Buy</h6>
                  <p>1.5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ paddingTop: "15px" }}>
            <div
              className="Main_Box_Div"
              style={{
                border: "2px solid rgb(151 134 134 / 15%)",
                padding: "9px",
                borderRadius: "5px",
              }}
            >
              <div className="Main_Collect1_Box">
                <div
                  style={{ position: "relative" }}
                  className="Collect_image"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    src={collect1}
                    alt=""
                    width={"100%"}
                    style={{
                      paddingBottom: "1rem",
                      paddingTop: "",
                      borderRadius: "5px",
                    }}
                  />

                  {isHovering ? (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <a href="">
                        <button
                          style={{
                            padding: "6px",
                            width: "6rem",
                            border: "none",
                          }}
                        >
                          Rent
                        </button>
                      </a>
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "10px",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "30px",
                        left: "15px",
                      }}
                    >
                      <img src={starship} width={30} />
                    </div>
                  )}
                </div>
                <div className="Rent_parag"></div>
                <div className="level_31">
                  <h6 style={{ color: "white" }}>level 31</h6>
                </div>
              </div>
              <div
                className="Aliean_Raid_Starship"
                style={{
                  color: "white",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div className="Aliean_Paragraph">
                  <h6 style={{ fontSize: "15px" }}>Alien Raid Starship</h6>
                  <p style={{ fontStyle: "12px" }}>Alien Raid Starship #5411</p>
                </div>
                <div className="Collect_image">
                  <img
                    style={{ paddingLeft: "34px" }}
                    src={AlienRaidStarShip}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="Jet_Power_Accuracy"
                style={{
                  display: "flex",
                  color: "white",
                  gap: "45px",
                  flexWrap: "wrap",
                  border: "2px solid",
                  padding: "10px 13px",
                  borderRadius: "10px",
                  height: "73px",
                  textAlign: "center",
                  border: "none",
                }}
              >
                <div className="Jet_Power">
                  <h6>Jet Power</h6>
                  <p style={{ textAlign: "start" }}>120</p>
                </div>
                <div className="Accuracy">
                  <h6>Accuracy</h6>
                  <p style={{ textAlign: "start" }}>80%</p>
                </div>
                <div className="Buy">
                  <h6>Buy</h6>
                  <p>1.5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ paddingTop: "15px" }}>
            <div
              className="Main_Box_Div"
              style={{
                border: "2px solid rgb(151 134 134 / 15%)",
                padding: "9px",
                borderRadius: "5px",
              }}
            >
              <div className="Main_Collect1_Box">
                <div
                  style={{ position: "relative" }}
                  className="Collect_image"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    src={collect1}
                    alt=""
                    width={"100%"}
                    style={{
                      paddingBottom: "1rem",
                      paddingTop: "",
                      borderRadius: "5px",
                    }}
                  />

                  {isHovering ? (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <a href="">
                        <button
                          style={{
                            padding: "6px",
                            width: "6rem",
                            border: "none",
                          }}
                        >
                          Rent
                        </button>
                      </a>
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "10px",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "30px",
                        left: "15px",
                      }}
                    >
                      <img src={starship} width={30} />
                    </div>
                  )}
                </div>
                <div className="Rent_parag"></div>
                <div className="level_31">
                  <h6 style={{ color: "white" }}>level 31</h6>
                </div>
              </div>
              <div
                className="Aliean_Raid_Starship"
                style={{
                  color: "white",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div className="Aliean_Paragraph">
                  <h6 style={{ fontSize: "15px" }}>Alien Raid Starship</h6>
                  <p style={{ fontStyle: "12px" }}>Alien Raid Starship #5411</p>
                </div>
                <div className="Collect_image">
                  <img
                    style={{ paddingLeft: "34px" }}
                    src={AlienRaidStarShip}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="Jet_Power_Accuracy"
                style={{
                  display: "flex",
                  color: "white",
                  gap: "45px",
                  flexWrap: "wrap",
                  border: "2px solid",
                  padding: "10px 13px",
                  borderRadius: "10px",
                  height: "73px",
                  textAlign: "center",
                  border: "none",
                }}
              >
                <div className="Jet_Power">
                  <h6>Jet Power</h6>
                  <p style={{ textAlign: "start" }}>120</p>
                </div>
                <div className="Accuracy">
                  <h6>Accuracy</h6>
                  <p style={{ textAlign: "start" }}>80%</p>
                </div>
                <div className="Buy">
                  <h6>Buy</h6>
                  <p>1.5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ paddingTop: "15px" }}>
            <div
              className="Main_Box_Div"
              style={{
                border: "2px solid rgb(151 134 134 / 15%)",
                padding: "9px",
                borderRadius: "5px",
              }}
            >
              <div className="Main_Collect1_Box">
                <div
                  style={{ position: "relative" }}
                  className="Collect_image"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    src={collect1}
                    alt=""
                    width={"100%"}
                    style={{
                      paddingBottom: "1rem",
                      paddingTop: "",
                      borderRadius: "5px",
                    }}
                  />

                  {isHovering ? (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <a href="">
                        <button
                          style={{
                            padding: "6px",
                            width: "6rem",
                            border: "none",
                          }}
                        >
                          Rent
                        </button>
                      </a>
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "10px",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "30px",
                        left: "15px",
                      }}
                    >
                      <img src={starship} width={30} />
                    </div>
                  )}
                </div>
                <div className="Rent_parag"></div>
                <div className="level_31">
                  <h6 style={{ color: "white" }}>level 31</h6>
                </div>
              </div>
              <div
                className="Aliean_Raid_Starship"
                style={{
                  color: "white",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div className="Aliean_Paragraph">
                  <h6 style={{ fontSize: "15px" }}>Alien Raid Starship</h6>
                  <p style={{ fontStyle: "12px" }}>Alien Raid Starship #5411</p>
                </div>
                <div className="Collect_image">
                  <img
                    style={{ paddingLeft: "34px" }}
                    src={AlienRaidStarShip}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="Jet_Power_Accuracy"
                style={{
                  display: "flex",
                  color: "white",
                  gap: "45px",
                  flexWrap: "wrap",
                  border: "2px solid",
                  padding: "10px 13px",
                  borderRadius: "10px",
                  height: "73px",
                  textAlign: "center",
                  border: "none",
                }}
              >
                <div className="Jet_Power">
                  <h6>Jet Power</h6>
                  <p style={{ textAlign: "start" }}>120</p>
                </div>
                <div className="Accuracy">
                  <h6>Accuracy</h6>
                  <p style={{ textAlign: "start" }}>80%</p>
                </div>
                <div className="Buy">
                  <h6>Buy</h6>
                  <p>1.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collect;
