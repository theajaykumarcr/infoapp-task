import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        class="navbar navbar-light navbar-expand-md justify-content-between navbar-fixed-top"
        style={{ backgroundColor: "#337ab7" }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link pl-0 text-white" to="/">
                  Infolog Solutions Pvt Ltd.{" "}
                </Link>
              </li>
            </ul>
          </div>

          <p class="navbar-brand mx-auto d-block text-center order-2 order-md-1 w-25 text-white">
            Registration
          </p>

          <div class="navbar-collapse collapse dual-nav w-50 order-0 order-md-2 justify-content-end">
            <Link className="btn btn-success" to="/login">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
