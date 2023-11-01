import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import UsersPages from "./pages/UsersPages";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import UserProvider from "./context/UserProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="indicadores" element={<p>indicadores</p>} />
              <Route path="metricas" element={<p>metricas</p>} />
            </Route>
            <Route path="/users" element={<UsersPages />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
