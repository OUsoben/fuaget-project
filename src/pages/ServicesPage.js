import React from "react";
import "../styles/serviceStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
const ServicesPage = () => {
  return (
    <>
      <div className="">
        <div className=" d-flex flex-column img-fluid   object-fit-cover service-items">
          <div style={{ height: "650px" }} className="p-5 text-white container">
            <h1 className=" mt-5 service-font">Marketing Sevices</h1>
            <p className="pt-5 col-xl-5 ">
              {" "}
              The future of your business is bright, and we're here to
              illuminate the path. Let's revolutionize your marketing strategy
              and propel your brand to new heights. Contact us today and let's
              embark on this exciting journey together!
            </p>
            <button className="btn btn-info mt-5">Get Now</button>
          </div>
        </div>

        <section className="mt-5 container">
          <div className=" row justify-cotent-center ">
            <div className="col-xl-5 ms-xl-5 order-1">
              <img
                style={{ width: "90%" }}
                className="img-fluid item-border"
                src="https://static.vecteezy.com/system/resources/previews/011/381/958/original/business-people-shaking-hands-finishing-up-a-meeting-3d-character-illustration-png.png"
                alt=""
              />
            </div>
            <div className="col-xl-6  p-5 order-xl-2 mt-xl-5">
              <h3 className="fw-bold">Benefits Showcase</h3>
              <hr size="5" style={{ width: "250px" }} color="orange" />
              <dl className="pt-3 text-muted">
                <dd>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} color="green" />{" "}
                  <span className="fw-bold text-dark">
                    {" "}
                    Time-Saving Solutions:{" "}
                  </span>
                  Imagine reclaiming precious hours in your day.
                </dd>
                <dd>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} color="green" />{" "}
                  <span className="fw-bold text-dark"> Unmatched Quality:</span>{" "}
                  We don't just meet standards we set them.
                </dd>
                <dd>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} color="green" />{" "}
                  <span className="fw-bold text-dark">
                    {" "}
                    Tailored Just for You
                  </span>{" "}
                  : No one-size-fits-all. Our services are as unique as you are.
                </dd>
                <dd>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} color="green" />{" "}
                  <span className="fw-bold text-dark">
                    {" "}
                    Intuitive Interface:{" "}
                  </span>{" "}
                  Easy and enjoyable user experience.
                </dd>
                <dd>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} color="green" />{" "}
                  <span className="fw-bold text-dark">
                    {" "}
                    Cutting-Edge Technology:
                  </span>{" "}
                  Stay ahead with the latest innovations.
                </dd>
                <dd>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} color="green" />{" "}
                  <span className="fw-bold text-dark">
                    {" "}
                    Personalized Support:
                  </span>{" "}
                  Our team is here for you, every step of the way.
                </dd>
              </dl>
            </div>
          </div>
        </section>
        <section className="container mt-5 ">
          <div className="row justify-content-center gap-4 ">
            <div className="text-center ">
              <h4 className="fw-bold">Featured On</h4>
              <p className="">
                F A U G E T is delighted to be covered by various Media. Our
                team adheres to six original core values (Teamwork, High
                Ambition, Strong Confident, Be the only ONE, Working Hard, and
                PDCA Quality Cycle) to ensure we deliver what we promise to
                ourselves and our customers.
              </p>
            </div>

            <div style={{ height: "120px", width: "120px" }} className="">
              <img
                className="img-fluid my-4 pt-2"
                src="https://business-cambodia.com/static/BC.png"
                alt=""
              />
            </div>

            <div style={{ height: "120px", width: "120px" }} className="">
              <img
                className="img-fluid py-2"
                src="https://play-lh.googleusercontent.com/1oPRKvscTnDjSwwrZlsbS6CGwblLFosiTfSvbtoK2l5eQapwkcQnhm-YWkoBxm64zA"
                alt=""
              />
            </div>
            <div style={{ height: "120px", width: "120px" }} className="">
              <img
                className="img-fluid my-2"
                src="https://i.pinimg.com/474x/36/9f/61/369f612149566874dcbc2d8735d51ccb.jpg"
                alt=""
              />
            </div>
            <div style={{ height: "120px", width: "120px" }} className="">
              <img
                src="https://www.acledasecurities.com.kh/as/assets/layout/logo1.png"
                alt=""
                className="img-fluid my-2"
              />
            </div>

            <div style={{ height: "120px", width: "120px" }} className="">
              <img
                className="img-fluid my-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkrVSxfqVLuwWZBTExTBg7XSAQG9CwzWyK0EefimGtDCNfSsBtgyx4p5aZXCqoV2B84U&usqp=CAU"
                alt=""
              />
            </div>
            <div style={{ height: "120px", width: "120px" }} className="">
              <img
                src="https://www.istad.co/resources/img/logo_md.png"
                alt=""
                className="img-fluid my-2"
              />
            </div>
          </div>
        </section>
        <div className="mt-5  ">
          <div className="">
            <div className="text-center">
              <h3 className="fw-bold mt-5">services</h3>
            </div>
            <div className="me-3 ms-3 bg- ">
              <div className="row d-flex  gap-xl-5  gap-2 mt-5 justify-content-center  box-font  ">
                <div
            
                  className="border rounded bg-light    col-xl-3"
                >
                  <img
                    className="border-services  img-fluid col-xl-4 col-3 col-md-2 ms-3"
                    src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png"
                    alt=""
                  />
                  <p className="ps-4 pe-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus est eligendi tenetur molestias exercitationem repudiandae quidem cum ullam. Nostrum necessitatibus ad cupiditate minima, itaque earum quia modi asperiores esse!</p>
                </div>
                <div
          
                  className="border rounded d- col-xl-3  "
                >
                  <img
                    className="img-fluid col-xl-4 col-md-2 col-3 ms-3"
                    src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png"
                    alt=""
                  />
                  <p className="ps-4 pe-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione vel distinctio nobis molestiae reiciendis, repudiandae illo eius sint iusto unde hic temporibus qui nesciunt corporis enim. Dignissimos, ullam nulla.</p>
                </div>
                <div

                  className="border rounded  col-xl-3 "
                >
                  <img
                    className="img-fluid col-xl-4 col-3 col-md-2 ms-3"
                    src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png"
                    alt=""
                  />
                  <p className="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas, maiores omnis ut totam necessitatibus earum saepe accusantium corrupti. Suscipit quam, vel a facere mollitia voluptatem enim dolor veritatis natus?</p>
                </div>
                <div
               
                  className="border rounded  col-xl-3 "
                >
                  <img
                    className="img-fluid col-xl-4 col-3 col-md-2 ms-3"
                    src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png"
                    alt=""
                  />
                  <p className="px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus est eligendi tenetur molestias exercitationem repudiandae quidem cum ullam. Nostrum necessitatibus ad cupiditate minima, itaque earum quia modi asperiores esse!</p>
                </div>
                <div
                 
                  className="border rounded   col-xl-3 "
                >
                  <img
                    className="img-fluid col-xl-4 col-3 col-md-2 ms-3"
                    src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png"
                    alt=""
                  />
                  <p className="px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus est eligendi tenetur molestias exercitationem repudiandae quidem cum ullam. Nostrum necessitatibus ad cupiditate minima, itaque earum quia modi asperiores esse!</p>
                </div>
                <div
             
                  className="border rounded   col-xl-3 "
                >
                  <img
                    className="img-fluid col-xl-4 col-3 col-md-2 ms-3"
                    src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png"
                    alt=""
                  />
                  <p className="px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus est eligendi tenetur molestias exercitationem repudiandae quidem cum ullam. Nostrum necessitatibus ad cupiditate minima, itaque earum quia modi asperiores esse!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
