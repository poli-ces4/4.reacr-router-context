import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message, user, handlerUser } = useContext(UserContext);

  const handlerRegresar = () => {
    navigate("/", { replace: true });
  };

  const handlerChangeUser = () => {
    handlerUser({ id: 20, name: "Jorge" });
  };
  return (
    <div>
      <h2>
        User id: {id} name:{user.name}
      </h2>
      <br />
      Message: {message}
      <br />
      <button onClick={handlerChangeUser}>Cambiar Usuario</button>
      <br />
      <button onClick={handlerRegresar}>Regresar</button>
    </div>
  );
};

export default UserPage;
