import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import ReactFragment from "./Concepts/React-fragment/ReactFragment";

// import Parent from "./Concepts/Use-Callback/Parent";
// import Parent from "./Concepts/Use-Ref/Parent";
// import Parent from "./Concepts/Custom-hook/Parent";

// import Home from "./Concepts/React-routing/Home";
// import About from "./Concepts/React-routing/About";
// import Contact from "./Concepts/React-routing/Contact";
// import Navbar from "./Concepts/React-routing/Navbar";

import Home from "./Concepts/Higher-order-component/Home";
import Dashboard from "./Concepts/Higher-order-component/Dashboard";

// Lazy load components for code splitting
// const Parent = lazy(() => import("./Concepts/Code-splitting/Parent"));
// const ManualWay = lazy(() =>
//   import("./Concepts/List-Virtualization/ManualWay")
// );

// Main App component that sets up routes and lazy loading for code splitting and shows a loading fallback until the components are loaded
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact/:name" element={<Contact />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;

// To use the lazy loaded in routing , you can wrap your routes in a Suspense component with a fallback UI.
// <Suspense fallback={<div>Loading...</div>}>
//   <Routes>
//     <Route path="/" element={<Parent />} />
//     <Route path="/manual" element={<ManualWay />} />
//   </Routes>
// </Suspense>
