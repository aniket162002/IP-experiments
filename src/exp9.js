import React, { useState } from 'react';

function Exp9() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aniket");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Name - {name}</p>
      <button onClick={() => setName("Aniee")}>
        Click me
      </button>
    </div>
  );
}

export default Exp9