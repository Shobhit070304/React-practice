import React, { useRef, useState } from "react";

const totalItems = 500;
const itemHeight = 30; // px
const containerHeight = 300; // px

// Create a large list of items
const items = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);

// This component demonstrates a manual way to implement list virtualization
// by rendering only the visible items based on the scroll position.
// This is less efficient than using libraries like react-window but helps
// understand the concept of virtualization.
function ManualWay() {
  console.log("ManualWay component rendered");


  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const visibleItems = items.slice(startIndex, startIndex + visibleCount + 1);
  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };
  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: containerHeight,
        overflowY: "scroll",
        border: "1px solid gray",
        position: "relative",
      }}
    >
      <div style={{ height: totalItems * itemHeight, position: "relative" }}>
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            style={{
              position: "absolute",
              top: (startIndex + index) * itemHeight,
              height: itemHeight,
              width: "100%",
              padding: "4px",
              boxSizing: "border-box",
              borderBottom: "1px solid #eee",
              background: "#f9f9f9",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManualWay;
