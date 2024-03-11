import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";


  export default function AccountPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null)

   function logout() {
    axios.post('/logout');
    setUser(null)
    setRedirect(true)
    window.location.reload();
    window.location.href = "/";
  }


  // if (!ready) {
  //   return "Loading...";
  // }

  if (ready && !user) {
    <Navigate to={"/login"} />;
  }

 

  // if(redirect) {
  //   return <Navigate to={"/"} />
  // }

  return (
      <div className="text-left max-w-lg mt-20 mx-auto profile">
        <span className="font-bold  "> NAME : </span> <span className="text-black text-lg"> {user?.name} </span> 
        <br/>
        <span className="font-bold  "> EMAIL : </span> <span className="text-black text-lg"> {user?.email} </span>
        <br/>
        <button onClick={logout} className="primary max-w-sm mt-3 text-lg">Logout</button>
      </div>
  );
}
