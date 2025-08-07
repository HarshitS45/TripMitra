

import React from "react";

const TripNavigation = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-4 bg-light shadow"
      style={{ height: "100%"}}
    >
      <h4 className="mb-4 fw-bold text-center" style={{ fontSize: "1.5rem" }}>
        Trip Navigation
      </h4>

      <div className="mb-3">
        <Link to="/addtrip" className="text-decoration-none text-dark">
          <div className="p-3 bg-white rounded hover-shadow" style={{ fontSize: "1.1rem" }}>
            ➕ Add Trip
          </div>
        </Link>
      </div>

      <div className="mb-3">
        <Link to="/managetrip" className="text-decoration-none text-dark">
          <div className="p-3 bg-white rounded hover-shadow" style={{ fontSize: "1.1rem" }}>
            🛠️ Manage Trip
          </div>
        </Link>
      </div>

      <div>
        <Link to="/triphistory" className="text-decoration-none text-dark">
          <div className="p-3 bg-white rounded hover-shadow" style={{ fontSize: "1.1rem" }}>
            📜 Trip History
          </div>
        </Link>
      </div>
    </div>
  );
};


export default TripNavigation;

