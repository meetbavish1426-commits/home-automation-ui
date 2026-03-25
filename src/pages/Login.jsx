//  import { useEffect, useRef } from "react";
 
 
//  function GetStart() {
   
 
//    const cardRef = useRef(null);
 
//    useEffect(() => {
   

//   const handleMouseMove = (e) => {
//     const x = (window.innerWidth / 2 - e.pageX) / 25;
//     const y = (window.innerHeight / 2 - e.pageY) / 25;

//     if (cardRef.current) {
//       cardRef.current.style.transform =
//         `rotateY(${x}deg) rotateX(${y}deg)`;
//     };
//   };

 

//   document.addEventListener("mousemove", handleMouseMove);
//   // document.addEventListener("mouseleave", resetTilt);

//   return () => {
//     document.removeEventListener("mousemove", handleMouseMove);
//     // document.removeEventListener("mouseleave", resetTilt);
//   };
// }, []);

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function GetStart({ setIsLoggedIn }) {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//     const cardRef = useRef(null);

//   function startLogin() {
//     if (!phone || !password) {
//       alert("Submit phone Number and password");
//       return;
//     }

    
//     localStorage.setItem("isLoggedIn", "true");
//     setIsLoggedIn(true);
//     navigate("/dashboard");
//   }
 
//    return (
//     <div className="GetStart-container">
//        <div className="GetStart-card" ref={cardRef}>
//            <h2>Start</h2>

// <div className="input-group">
//   <input id="username" type="text" required />
//   <label htmlFor="username">Username</label>
// </div>

// <div className="input-group">
//   <input id="contact" type="text" required />
//   <label htmlFor="contact">Phone Number or Email</label>
// </div>

// <div className="input-group">
//   <input id="password" type="password" required />
//   <label htmlFor="password">Password</label>
// </div>

// <button type="submit">Start</button>
 
//        </div>
//      </div>
//    );
//  }
 
//  export default GetStart;
 


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

      <div className="GetStart">

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