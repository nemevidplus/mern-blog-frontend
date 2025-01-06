import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-body-emphasis text-decoration-none"
        >
          <span className="fs-4">React példa feladat - Bootstrap és CRUD-MERN</span>
        </a>
      </header>

      {/* Interactive Image as Full-Screen Background */}
      <div
        className="position-relative rounded-3"
        style={{ width: "auto", maxWidth: "1500px", maxHeight: "700px", overflow: "hidden" }}
      >
        {/* Image with Map */}
        <img
          src="/blog5-2.png " // Ensure the image is in the public folder
          useMap="#image-map1"
          alt="Background with clickable areas"
          className="rounded"
          style={{
            width: "auto",
            height: "auto",
            // objectFit: "cover", // Mimics background-size: cover
          
          }}
          
        />

        {/* Image Map for Clickable Areas */}
        <map name="image-map1">
          <area
            shape="rect"
                coords="926,278,1060,171"
                alt="Test Area"
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    console.log("Rectangle clicked!");
                    navigate("create")
                }}
              
          />
        </map>
     

        {/* Content Overlay */}
        <div
          className="position-absolute"
          style={{
            top: "20%",
            left: "10%",
            color: "white",
            textAlign: "left",
            zIndex: 1, // Lower priority
          }}
        >
          <h1
            className="display-5 fw-bold text-white p-3 rounded"
            style={{ maxWidth: "180px" }}
          >
            Főoldal
          </h1>
          <p
            className="fs-4 text-white p-3 rounded mt-3"
            style={{ maxWidth: "400px" }}
          >
            Példa a posztok létrehozására <br />
            egy modern CRUD-alkalmazásban.
          </p>
          <Button
            className="btn btn-custom btn-lg"
            type="button"
            onClick={() => navigate("create")}
          >
            Tovább a blogra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
