import { useLogin } from "./hooks/useLogin";
import { useLogout } from "./hooks/useLogout";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import ProfileCard from "./components/ProfileCard";


const App = () => {
  const { login, isPending } = useLogin();
  const { logout } = useLogout();
  
  const { user, authIsReady } = useContext(AuthContext);
  console.log(user);
  return authIsReady ? (
    <div className="App">
      {user ? (
        <ProfileCard user={user} />
      ) : (
        <button className="btn login-btn" onClick={login}>
          Login With Github
        </button>
      )}
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment</h1>
  );
};
export default App;