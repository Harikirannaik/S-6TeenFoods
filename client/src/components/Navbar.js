import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";

export default function Navbar() {

  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-italic" to="/">
            <img
              src="https://i.ibb.co/fYN5T57/Red-Beige-Bold-Bar-Restaurant-Logo-2.png[/img][/url]"
              alt="The 6TEEN Flavours"
              style={{ height: "45px", width: "130px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              {/* <li className="nav-item">
                <Link
                  className="nav-link active fs-5 text-dark"
                  aria-current="page"
                  to="#"
                >
                  Home
                </Link>
              </li> */}
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5 text-dark"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-dark text-white mx-1" to="/login">
                  Login
                </Link>

                <Link className="btn bg-dark text-white mx-1" to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn bg-dark text-white mx-2" onClick={()=>{setCartView(true)}}>
                  My Cart{" "}
                  <Badge pill bg="danger">
                    {data.length}
                  </Badge>
                  </div>
                  {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                <div
                  className="btn bg-danger text-white mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
