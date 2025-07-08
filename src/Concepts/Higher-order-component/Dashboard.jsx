import React from "react";

function withAuth(Wrapped) {
  return function WrappedDashboard(props) {
    let isLoggedIn = false;

    if (!isLoggedIn) {
      return <h6>You are not authorized to view this page</h6>;
    }
    return <Wrapped {...props} />;
  };
}

function Dashboard() {
  return <div>Dashboard</div>;
}

const ProtectedDashboard = withAuth(Dashboard);
export default ProtectedDashboard;
