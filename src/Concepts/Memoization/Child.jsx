import React, { memo } from "react";

// Child component that receives 'users' as props
// It will only re-render if 'users' prop changes
// This is achieved using React.memo, which performs a shallow comparison of props
// If the props are the same, it prevents unnecessary re-renders
const Child = memo(({ users }) => {
  console.log("Child rendered");
  return (
    <div style={{ padding: "20px" }}>
      <div>Child</div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
});

export default Child;
