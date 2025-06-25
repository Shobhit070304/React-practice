import { FixedSizeList as List } from "react-window";

// Create a large list of items
const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

// This component demonstrates a better way to implement list virtualization
// using the react-window library, which is more efficient and easier to use
// compared to manual implementations.
function BetterWay() {
  return (
    <>
      <p>List Virtualization</p>
      <List
        height={300}
        itemCount={items.length}
        itemSize={30}
        width={"100%"}
        onItemsRendered={({ visibleStartIndex, visibleStopIndex }) => {
          console.log(
            "Visible Items:",
            items.slice(visibleStartIndex, visibleStopIndex + 1)
          );
        }}
      >
        {({ index, style }) => <div style={style}>{items[index]}</div>}
      </List>
    </>
  );
}

export default BetterWay;
