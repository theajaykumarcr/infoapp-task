import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-5">
      <div
        className="card p-4"
        style={{ width: "600px", alignItems: "center" }}
      >
        <div className="card-body">
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-4 col-form-label">
              User ID:<span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <input
                type="number"
                id="name"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-4 col-form-label">
              Password:<span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                id="password"
                className="form-control"
                required
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
