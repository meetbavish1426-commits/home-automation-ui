import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {

  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function startLogin(){

    if(!phoneOrEmail || !password){
      alert("Enter phone/email and password");
      return;
    }

    try{

      const res = await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          phoneOrEmail: phoneOrEmail,
          password: password
        })
      });

      const data = await res.json();

      if(data.success){

        localStorage.setItem("isLoggedIn","true");
        setIsLoggedIn(true);

        alert("Login successful");

        navigate("/dashboard");

      }else{
        alert(data.message);
      }

    }catch(error){

      console.log(error);
      alert("Server error");

    }

  }

  return (

    <div className="GetStart-container">

      <div className="GetStart-card">

        <h2 style={{color:"white",textAlign:"center"}}>Login</h2>
        <br></br> <br></br>
        <div className="input-group">
          <input
            type="text"
            value={phoneOrEmail}
            onChange={(e)=>setPhoneOrEmail(e.target.value)}
            required
          />
          <label>Phone Number or Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <form onSubmit={(e)=>{e.preventDefault();startLogin();}}>
          <button type="submit">Login</button>
        </form>

      </div>

    </div>

  );

}