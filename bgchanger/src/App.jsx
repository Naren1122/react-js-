// File: WithRef.js
import React, { useState, useRef } from "react";

function CounterSolution() {
  const [renderCount, setRenderCount] = useState(0);

  // ✅ This is our "Secret Pocket"
  // It starts with { current: 0 }
  const secretCounter = useRef(0);

  const incrementSecret = () => {
    secretCounter.current += 1;
    console.log("Secret Pocket holds:", secretCounter.current);
  };

  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>The Remembering Component</h2>
      <p>Room Refreshes: {renderCount}</p>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Refresh Room
      </button>

      <p>Secret Counter: {secretCounter.current}</p>
      <button onClick={incrementSecret}>Add to Secret Counter</button>
      <p>
        <i>
          Check the console. Even if you refresh the room, the Secret Counter
          stays!
        </i>
      </p>
    </div>
  );
}
