import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={"./F3DTennis-Dev.png"} height={512} />
      </div>
      <h1>F3DTennis | MSM</h1>
      <h2>World's First AI Tennis coach</h2>
      <p>Learn professional tennis anywhere, anytime.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Send me newsletter {count}
        </button>
        <p>Your email address for further updates</p>
      </div>
      <p className="read-the-docs">XR/MR App on Vision Pro is developing</p>
    </div>
  );
}

export default App;
