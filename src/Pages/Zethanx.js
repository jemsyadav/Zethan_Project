import React from "react";
import Navbar1 from "../Components/Header";

const Zethanx = () => {
  return (
    <div>
      <div className="container">
        <Navbar1 />
        <div className="row">
          <div
            className="col-lg-4 col-sm-12"
            style={{
              color: "white",
              paddingTop: "5rem",
              margin: "0px",
              paddingBottom: "2rem",
            }}
          >
            <div
              style={{
                border: "1px solid rgb(255 254 254 / 15%)",
                borderRadius: "16px",
                padding: "15px",
                display: "inline-block",
              }}
            >
              <p
                style={{
                  color: "#ffffff80",
                  fontSize: "16px",
                  fontWeight: "bolder",
                  lineHeight: "1.8",
                }}
              >
                NFT STAKING
              </p>
              <p
                style={{
                  color: "#ffffff80",
                  fontSize: "12px",
                  fontWeight: "bolder",
                }}
              >
                It might take upto 5 minutes to get the NFT list updated.
              </p>
              <hr className="Line" />

              <div
                className="Main_Wallet_Div"
                style={{
                  display: "flex",
                  gap: "51px",
                  border: "1px solid red",
                  width: "20rem",
                  padding: "10px 30px",
                  background: " rgb(151 134 134 / 15%)",
                  border: "none",
                  borderRadius: "1rem",
                  alignItems: "center",
                }}
              >
                <div className="Heading_Zethan">
                  <h6>Zethanx</h6>
                </div>
                <div className="Connect_Wallet">
                  <a href="">
                    <button
                      className="wallet"
                      style={{
                        padding: "12px 20px",
                        border: "none",
                        borderRadius: "12px",
                      }}
                    >
                      <h6 style={{ color: "white" }}>Connect Wallet</h6>
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="main_div_line"
                style={{
                  display: "flex",
                  gap: "10px",
                  textAlign: "center !important",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <div className="left_line">
                  <hr style={{ width: "5rem" }} class="new1" />
                </div>
                <div className="Select_button">
                  <a href="">
                    <button
                      style={{
                        padding: "7px",
                        border: "none",
                        borderRadius: "24px",
                        width: "7rem",
                        background: "rgb(151 134 134 / 15%)",
                        paddingTop: "10px",
                      }}
                    >
                      <h6 style={{ color: "white" }}>Select</h6>
                    </button>
                  </a>
                </div>
                <div className="right_line">
                  <hr style={{ width: "5rem" }} class="new1" />
                </div>
              </div>
              <div
                className="Staked_MAin_Div"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "2px solid rgb(151 134 134 / 15%)",
                  width: "20rem",
                  padding: "10px",
                  borderRadius: "12px",
                  background: " rgb(151 134 134 / 15%)",
                  paddingTop: "10px",
                  alignItems: "center",
                }}
              >
                <div className="Staked_zethanx">
                  <h6>Staked Zethanx</h6>
                </div>
                <div className="point">
                  <h6>0</h6>
                </div>
              </div>
              <div
                className="Total_Nft_Main_Div"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "20rem",
                  border: "2px solid rgb(151 134 134 / 15%)",
                  padding: "10px 30px",
                  alignItems: "center",
                  borderRadius: "12px",
                  paddingTop: "10px",
                  marginTop: "10px",
                  background: "rgb(151 134 134 / 15%)",
                }}
              >
                <div className="Total_Nft">
                  <h6> Total NFT</h6>
                </div>
                <div className="Zero">
                  <h6>0</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="Main_Aviable_NFT" style={{ paddingTop: "5rem" }}>
              <div
                className="Main_Div_Connect_NFT"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  alignItems: "center",
                }}
              >
                <div className="Avilable_Nft">
                  <h6>AVAILABLE NFT</h6>
                </div>
                <div className="Connect_Wallet">
                  <a href="">
                    <button
                      className="wallet"
                      style={{
                        padding: "12px 20px",
                        border: "none",
                        borderRadius: "12px",
                      }}
                    >
                      <h6 style={{ color: "white" }}>Connect Wallet</h6>
                    </button>
                  </a>
                </div>
              </div>
              <hr className="hr2" />
              <div className="Avibale_Nft_Build_With_zethan">
                <div className="row">
                  <div className="col-lg-3">
                    <div
                      className="MAin_Border"
                      style={{
                        border: "1px solid #454545",
                        padding: "5px",
                        borderRadius: "15px",
                        width: "10rem",
                      }}
                    >
                      <div
                        className="Select_button"
                        style={{ textAlign: "center" }}
                      >
                        <a href="">
                          <button
                            style={{
                              padding: "7px",
                              border: "none",
                              borderRadius: "24px",
                              width: "9rem",
                              background: "rgb(151 134 134 / 15%)",
                              paddingTop: "10px",
                              textAlign: "center",
                            }}
                          >
                            <h6 style={{ color: "white", textAlign: "center" }}>
                              In Game Nft
                            </h6>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="Number">
                      <h2 style={{ color: "white", textAlign: "center" }}>0</h2>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="Main_Border"
                      style={{
                        border: "1px solid #454545",
                        padding: "5px",
                        borderRadius: "15px",
                        width: "10rem",
                      }}
                    >
                      <div
                        className="Select_button"
                        style={{ textAlign: "center" }}
                      >
                        <a href="">
                          <button
                            style={{
                              padding: "7px",
                              border: "none",
                              borderRadius: "24px",
                              width: "9rem",
                              background: "rgb(151 134 134 / 15%)",
                              paddingTop: "10px",
                              textAlign: "center",
                            }}
                          >
                            <h6 style={{ color: "white", textAlign: "center" }}>
                              Zethan Nft
                            </h6>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="Number">
                      <h2 style={{ color: "white", textAlign: "center" }}>0</h2>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="Main_Border"
                      style={{
                        border: "1px solid #454545",
                        padding: "5px",
                        borderRadius: "15px",
                        width: "10rem",
                      }}
                    >
                      <div
                        className="Select_button"
                        style={{ textAlign: "center" }}
                      >
                        <a href="">
                          <button
                            style={{
                              padding: "7px",
                              border: "none",
                              borderRadius: "24px",
                              width: "9rem",
                              background: "rgb(151 134 134 / 15%)",
                              paddingTop: "10px",
                              textAlign: "center",
                            }}
                          >
                            <h6 style={{ color: "white", textAlign: "center" }}>
                              Rented
                            </h6>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="Number">
                      <h2 style={{ color: "white", textAlign: "center" }}>
                        0.00
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="Main_Border"
                      style={{
                        border: "1px solid #454545",
                        padding: "5px",
                        borderRadius: "15px",
                        width: "10rem",
                      }}
                    >
                      <div
                        className="Select_button"
                        style={{ textAlign: "center" }}
                      >
                        <a href="">
                          <button
                            style={{
                              padding: "7px",
                              border: "none",
                              borderRadius: "24px",
                              width: "9rem",
                              background: "rgb(151 134 134 / 15%)",
                              paddingTop: "10px",
                              textAlign: "center",
                            }}
                          >
                            <h6 style={{ color: "white", textAlign: "center" }}>
                              Sold
                            </h6>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="Number">
                      <h2 style={{ color: "white", textAlign: "center" }}>
                        0.00
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zethanx;
