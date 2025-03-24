import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaShoppingCart, FaUser } from "react-icons/fa";

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const locations = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"];

  return (
    <div className="container-fluid bg-light min-vh-100 px-0 overflow-hidden">
      {/* Navbar */}
      <nav className="px-4 navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <img src="/logo512.png" alt="Urban Searches Logo" style={{ width: 40, height: 40 }} /> Urban Searches
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Beauty</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Homes</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Native</a></li>
            </ul>
            <div className="ms-3 position-relative d-flex align-items-center">
              <div className="input-group" onClick={() => setShowDropdown(!showDropdown)}>
                <span className="input-group-text bg-white"><FaMapMarkerAlt /></span>
                <input type="text" className="form-control" value={selectedLocation} readOnly />
              </div>
              {showDropdown && (
                <ul className="list-group position-absolute w-100 bg-white shadow" style={{ zIndex: 1000 }}>
                  {locations.map((location, index) => (
                    <li key={index} className="list-group-item list-group-item-action" onClick={() => { setSelectedLocation(location); setShowDropdown(false); }}>
                      {location}
                    </li>
                  ))}
                </ul>
              )}
              <div className="ms-3 d-flex align-items-center">
                <FaShoppingCart className="me-3" size={20} />
                <FaUser size={20} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center px-4 py-4 w-100">
        <h1 className="fw-bold">Home services at your doorstep</h1>
        <div className="row mt-4 justify-content-center w-100 mx-0">
          <div className="col-md-2 col-sm-4 p-2"><button className="btn btn-light w-100 shadow-sm">Women's Salon & Spa</button></div>
          <div className="col-md-2 col-sm-4 p-2"><button className="btn btn-light w-100 shadow-sm">Men's Salon & Massage</button></div>
          <div className="col-md-2 col-sm-4 p-2"><button className="btn btn-light w-100 shadow-sm">AC & Appliance Repair</button></div>
          <div className="col-md-2 col-sm-4 p-2"><button className="btn btn-light w-100 shadow-sm">Cleaning & Pest Control</button></div>
          <div className="col-md-2 col-sm-4 p-2"><button className="btn btn-light w-100 shadow-sm">Electrician, Plumber & Carpenter</button></div>
          <div className="col-md-2 col-sm-4 p-2"><button className="btn btn-light w-100 shadow-sm">Painting & Waterproofing</button></div>
        </div>
      </div>

      {/* Service Images */}
      <div className="container-fluid py-4 px-4 overflow-hidden">
        <div className="row mx-0">
          <div className="col-md-3 px-2 mt-1"><img src="./services/air-conditioner-service.jpg" alt="Service 1" className="img-fluid rounded shadow w-100" /></div>
          <div className="col-md-3 px-2 mt-1"><img src="./services/pest-control.jpg" alt="Service 2" className="img-fluid rounded shadow w-100" /></div>
          <div className="col-md-3 px-2 mt-1"><img src="./services/electrician-workers.jpg" alt="Service 3" className="img-fluid rounded shadow w-100" /></div>
          <div className="col-md-3 px-2 mt-1"><img src="./services/painter.jpg" alt="Service 4" className="img-fluid rounded shadow w-100" /></div>
        </div>
      </div>

      {/* Ratings and Stats */}
      <div className="text-center py-4 px-4 w-100">
        <h2 className="fw-bold">4.8⭐ Service Rating | 12M+ Customers Globally</h2>
      </div>

      {/* Promotional Banners */}
      <div className="container-fluid py-4 px-4 overflow-hidden">
        <div className="row mx-0">
          <div className="col-md-4 px-2"><div className="p-4 bg-dark text-white text-center rounded shadow">Deep clean, zero hassle - Book now</div></div>
          <div className="col-md-4 px-2"><div className="p-4 bg-success text-white text-center rounded shadow">Sale live - Buy now</div></div>
          <div className="col-md-4 px-2"><div className="p-4 bg-secondary text-white text-center rounded shadow">Elevate your home - Book now</div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
