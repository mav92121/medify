import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <p>app</p>
      <Outlet />
    </div>
  );
}

export default App;
