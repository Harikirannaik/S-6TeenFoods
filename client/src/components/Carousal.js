import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/4Z4DRZK/South-Indian-Food-Cooking-You-Tube-Banner-in-Green-and-Grey-Photocentric-Style.png[/img][/url]
              [url=https://imgbb.com/]png images[/url]"
              className="d-block w-100"
              alt="..."
              style={{
                filter: "brightness(60%)",maxHeight: "400px"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/4Z4DRZK/South-Indian-Food-Cooking-You-Tube-Banner-in-Green-and-Grey-Photocentric-Style.png[/img][/url]"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)",maxHeight: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/4Z4DRZK/South-Indian-Food-Cooking-You-Tube-Banner-in-Green-and-Grey-Photocentric-Style.png[/img][/url]"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)",maxHeight: "400px"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
