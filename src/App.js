import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={token ? <DashboardPage /> : <LoginPage />}
        />
        <Route
          path="*"
          element={<h2 className="text_c">Page Not Found!!</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
