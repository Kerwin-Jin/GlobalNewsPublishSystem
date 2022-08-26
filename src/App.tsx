import React from "react";
import "./App.less";
import "@arco-design/web-react/dist/css/arco.css";
import { Calendar } from "@arco-design/web-react";
import Management from "./pages/management";
function App() {
  return (
    <div>
      <Management />
    </div>
  );
}

export default App;
