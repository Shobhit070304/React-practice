import React, { lazy, Suspense, useEffect, useState } from "react";
const Child = lazy(() => import("./Child.jsx"));

// Parent component that uses code splitting to load Child component lazily and showing loading until the child component loads
function Parent() {
  console.log("Parent component rendered");
  return (
    <>
      <div className="text-red-300 min-h-screen w-full">Code Splitting</div>
      <div className="h-[200vh] bg-blue-100">Scroll Down</div>
      {/* {showChild && ( */}
      <Suspense fallback={<div>Loading...</div>}>
        <Child />
      </Suspense>
      {/* )} */}
    </>
  );
}

export default Parent;

// 1. If you want to load the Child component after a delay, you can use setTimeout in the lazy import like this:
// return new Promise((res) => {
//   setTimeout(() => {
//     res(import("./Child"));
//   }, 2000);
// });

// 2. If you want to load the Child component on scroll you can use this code snippet:
// const [showChild, setShowChild] = useState(false);
// useEffect(() => {
//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     if (scrollY > 300) {
//       setShowChild(true);
//       window.removeEventListener("scroll", handleScroll); // remove after first load
//     }
//   };
//   window.addEventListener("scroll", handleScroll); // add scroll event listener to load Child component on scroll
//   return () => window.removeEventListener("scroll", handleScroll); // cleanup event listener on unmount
// }, []);
