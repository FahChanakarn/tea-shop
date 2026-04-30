import { useState } from "react";

let count = 0;
function Counter() {
  const [count, setCount] = useState<number>(0);
  console.log("re render");
  return (
    <div>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        increase count
      </button>
    </div>
  );
}

export default Counter;
