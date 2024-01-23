import React from "react";
import "../styles/footerStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="bg-footer">
      <section className="container">
        <div className="p-3 pt-5 row me-1 text-white">
          <div className="col-xl-4 row des-font">
            <img
              className="img-fluid "
              style={{ width: "100px" }}
              src={require("../images/img-1.png")}
              alt="image logo"
            />
            <p className=" ">
              Welcome to the F A U G E T of market shops, where desires meet
              discovery and every aisle is an adventure waiting to unfold. These
              vibrant spaces, whether nestled on your local street corner or
              seamlessly integrated into the digital realm, are the heartbeat of
              commerce.
            </p>
          </div>
          <div className="col-xl-4 text-center ">
            <p className="fw-bold p-2 pt-3">CONTECT US</p>
            <div className=" ">
              <a className="text-white" style={{ textDecorationLine: "none" }} href="#">
                (+855) 95-000-190
              </a>
              <br />
              <a className="text-white" style={{ textDecorationLine: "none" }} href="#">
                (+855) 12-000-190
              </a>
              <br />
              <div className="mt-4">
                {" "}
                <a
                  style={{ textDecorationLine: "none" }}
                  className="text-white "
                  href="#"
                >
                  {" "}
                  <FontAwesomeIcon icon={faTelegram} />
                  Telegram
                </a>
                <a
                  style={{ textDecorationLine: "none" }}
                  className="text-white ms-2"
                  href="#"
                >
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 text-center pt-3">
            <div className=""></div>
          <p  className="fw-bold ">SUBSCIBE US </p>
          <iframe className="ms-4" src="https://www.youtube.com/embed/YZ5tOe7y9x4?si=WERg5Jp3Zyv0Klj2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <hr className="container text-white" />
      </section>
      <div className="allrights text-center text-white py-1">
        <p  className="">
          © 2024 All Rights Reserved. Design by
          <span 
            style={{ fontWeight: "bolder", whiteSpace: "pre" }}
            className=" text-weight-bold text-warning ">
            {" "}
            F A U G E T
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
