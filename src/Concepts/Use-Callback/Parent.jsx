import React, { useCallback, useState } from "react";
import Child from "./Child";
function Parent() {
  console.log("Parent component");
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    console.log("Hello");
  }, []);
  return (
    <>
      <h1>Use Callback</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child sayHello={sayHello} />
    </>
  );
}

export default Parent;
