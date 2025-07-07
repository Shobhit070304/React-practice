import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import ReactFragment from "./Concepts/React-fragment/ReactFragment";

// import Parent from "./Concepts/Use-Callback/Parent";
import Parent from "./Concepts/Use-Ref/Parent";

// Lazy load components for code splitting
// const Parent = lazy(() => import("./Concepts/Code-splitting/Parent"));
// const ManualWay = lazy(() =>
//   import("./Concepts/List-Virtualization/ManualWay")
// );

// Main App component that sets up routes and lazy loading for code splitting and shows a loading fallback until the components are loaded
function App() {
  return <Parent />;
}

export default App;

// To use the lazy loaded in routing , you can wrap your routes in a Suspense component with a fallback UI.
// <Suspense fallback={<div>Loading...</div>}>
//   <Routes>
//     <Route path="/" element={<Parent />} />
//     <Route path="/manual" element={<ManualWay />} />
//   </Routes>
// </Suspense>
