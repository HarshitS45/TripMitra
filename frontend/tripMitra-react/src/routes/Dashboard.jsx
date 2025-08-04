import React, { useState } from 'react';
import TripNavigation from '../components/TripNavigation';
import TripList from '../components/TripList';
import TripFilter from '../components/TripFilter';

const Dashboard = () => {
  //const [filters, setFilters] = useState({});

  return (
    <div className="container-fluid bg-light py-3">
      <div className="row g-3"> 
        <div className="col-md-3">
          <TripNavigation />
        </div>
        <div className="col-md-6">
          <TripList /> {/* 🔁 Pass filters to TripList */}
        </div>
        <div className="col-md-3">
          <TripFilter/> {/* 🔁 TripFilter updates filters */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
