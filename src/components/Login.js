import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  let navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <form
        onSubmit={() => {
          console.log("navigate?");
          navigate("/dash");
        }}
      >
        <label>Username</label>
        <input type="text" aria-label="Username" placeholder="Username" />
        <label>Password</label>
        <input type="password" aria-label="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
