import React, { useEffect, useRef, useState } from "react";

function Parent() {
  const [inputValue, setInputValue] = useState("");
  const Inputref = useRef("");

  useEffect(() => {
    Inputref.current = inputValue;
  }, [inputValue]);

  // useEffect(() => {
  // setCount(count + 1);
  // count.current += 1;
  // console.log(count);
  // });
  return (
    <>
      <p>useref</p>
      <input
        type="text"
        value={inputValue}
        ref={Inputref}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>{inputValue}</p>
      <p>{Inputref.current}</p>
      <button onClick={focus}>Click</button>
    </>
  );
}

export default Parent;
