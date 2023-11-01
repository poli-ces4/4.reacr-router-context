import { Link } from "react-router-dom";

const UsersPages = () => {
  return (
    <div>
      <h1>List users</h1>
      <ul>
        <li>
          <Link to="/user/10">User 10</Link>
        </li>
        <li>
          <Link to="/user/20">User 20</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsersPages;
