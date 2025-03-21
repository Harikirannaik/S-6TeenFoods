import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch(`http://localhost:3100/api/foodData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button className="btn btn-warning" type="submit">
                Search
              </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://i.ibb.co/LxXw4n1/starter.jpg[/img][/url]
                [url=https://imgbb.com/]upload picture without account[/url]"
                className="d-block w-100"
                alt="..."
                style={{
                  filter: "brightness(80%)",
                  maxHeight: "400px"
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/NF0j0pj/pizza.jpg[/img][/url]
                [url=https://imgbb.com/]upload picture without account[/url]"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(60%)", maxHeight: "400px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/Pckth7G/biryani.jpg[/img][/url]
                [url=https://imgbb.com/]upload picture without account[/url]"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(60%)", maxHeight: "400px" }}
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
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3" key={data._id}>
                <div className="fs-2 m-3 text-warning">{data.CategoryName}</div>
                <hr className="bg-warning" />
                <div className="row g-3">
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-4"
                          >
                            <Card
                              foodItem={filterItems} // Pass filterItems as foodItem
                              foodName={filterItems.name}
                              options={filterItems.options[0]}
                              ImgSrc={filterItems.img}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No Such Data Found</div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>No Categories Found</div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
