import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import UsersPages from "./pages/UsersPages";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersPages />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
