import React, { useMemo, useState } from "react";
import Child from "./Child";

const userData = ["Bob", "Alice", "John", "Jane", "Doe"];

function Parent() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(userData);

  // Using useMemo to memoize the result of a heavy computation
  // This will only recompute when 'count' changes
  // If 'count' does not change, it will return the cached value
  // This is useful to avoid expensive calculations on every render
  const sayHello = useMemo(() => {
    let res = 0;
    for (let i = 0; i < 1000000000; i++) {
      res += i;
    }
    return count;
  }, [count]);
  console.log(sayHello);

  const handleAddUser = () => {
    setUsers([...users, "Ramu"]);
  };
  console.log("Parent rendered");
  return (
    <div>
      <div>Parent</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={handleAddUser}>Add user</button>
      <Child users={users} />
    </div>
  );
}

export default Parent;
