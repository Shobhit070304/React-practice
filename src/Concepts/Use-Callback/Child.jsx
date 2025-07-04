import React, { memo } from "react";

const Child = memo(({ sayHello }) => {
  console.log("Child component");
  return (
    <>
      <div>Child</div>
      <button onClick={sayHello}>Hello</button>
    </>
  );
});

export default Child;
