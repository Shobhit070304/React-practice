// MyComponent.js
// Demo component that intentionally throws an error to test error boundaries.
import React from "react";

const MyComponent = () => {
  // Intentionally throw error
  let a = 5;

  if (a == 5) {
    throw new Error("Custom crash from MyComponent");
  }

  return <div>This will never render.</div>;
};

export default MyComponent;
