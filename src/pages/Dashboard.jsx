import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <Link to="indicadores">Indicadores</Link>
      <br />
      <Link to="metricas">Metricas</Link>
      <br />
      <Outlet />
    </div>
  );
};

export default Dashboard;
