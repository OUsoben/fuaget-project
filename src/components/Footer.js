import React from "react";
import "../styles/footerStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  return (
    <div className=" ">
      <div className="text-center img-fluid">
      <img   className="object-picture img-fluid " src="https://www.fakhruddintrading.com/wp-content/uploads/2015/09/footer.png" alt="" />
      </div>
    <div className="bg-footer ">
      <section className="container">
        <div className="p-3 pt-5 row me-1 text-white ">
          <div className="col-xl-4 row des-font">
            <img
              className="img-fluid"
              style={{ width: "30%" }}
              src={require("../images/img-1.png")}
              alt="image logo"
            />
            <p className="">
              Welcome to the F A U G E T of market shops, where desires meet
              discovery and every aisle is an adventure waiting to unfold. These
              vibrant spaces, whether nestled on your local street corner or
              seamlessly integrated into the digital realm, are the heartbeat of
              commerce.
            </p>
          </div>
          <div className="col-xl-4 text-center des-font ">
            <p className="fw-bold p-2 pe-xl-4 pt-3">CONTECT US</p>
            <div className="">
              <div className="justify-content-end ms-xl-4 d-flex">
                <p className="col-xl-8   text-xl-start " > <FontAwesomeIcon icon={faLocationDot} /> #01, Street 86k Phum Chak Jruk   Tboung,Sangkat Somrong Krom, Khan   Porsenchey,  Phnom Penh, Cambodia</p></div>
              
              <a className="text-white ms-xl-4 " style={{ textDecorationLine: "none" }} href="#">
              <FontAwesomeIcon icon={faPhone} />  (+855) 95-000-190
              </a>
              <br  />
              <br />
              <a className="text-white ms-xl-3 " style={{ textDecorationLine: "none" }} href="#">
              <FontAwesomeIcon icon={faEnvelope} /> info@fuaget.com
              </a>
              
              <br />
              <div className="mt-4">
                {" "}
                <a
                  style={{ textDecorationLine: "none" }}
                  className="text-white ms-xl-5 "
                  href="#"
                >
                  {" "}
                  <FontAwesomeIcon  icon={faTelegram}   /> Telegram
                  </a>
                <a
                  style={{ textDecorationLine: "none" }}
                  className="text-white ms-2 "
                  href="#"
                >
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 text-center ms-xl-5 des-font mt-2">
            <div className=""></div>
          <p  className="fw-bold pe-2 text-xl-start ">SUBSCIBE US </p>
          <iframe className="" src="https://www.youtube.com/embed/YZ5tOe7y9x4?si=WERg5Jp3Zyv0Klj2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <hr  className="container text-white " />
      </section>
      <div className="allrights  me-5 text-white  py-1 column-gap-5 row ">
        <p style={{whiteSpace: "pre"}} className="col-xl-4 text-center ">
         © 2024 F U A G E T  |  All Rights Reserved.     
        </p>
        <p className="col-xl-7 text-xl-end ms-2 ms-xl-4 text-center ">Developed by : <a target="_blank" style={{textDecorationLine: "none"}} href="https://ousoben.github.io/Detail-about-me/">Ou Soben</a></p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
