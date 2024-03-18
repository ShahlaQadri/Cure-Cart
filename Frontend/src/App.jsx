import { useState } from "react";

import "./App.css";

import Header from "./Components/header/Header";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-4 my-4">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
