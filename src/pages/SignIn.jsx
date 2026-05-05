 
// function Login() {
//   return (
   
//     <div style={styles.page }>
    
//       <div style={styles.container}>
//         <h1 style={styles.title}>Login</h1>

//         <div style={styles.row}>
//           <label>Username :</label>
//           <input type="text" placeholder="username" />
//         </div>

//         <div style={styles.row}>
//           <label>Phone Number :</label>
//           <input type="tel" placeholder="phone number" />
//         </div>

//         <div style={styles.row}>
//           <label>Email Id :</label>
//           <input type="email" placeholder="email id" />
//         </div>

//         <div style={styles.row}>
//           <label>Password :</label>
//           <input type="password" placeholder="password" />
//         </div>

//         <div style={styles.row}>
//           <label>BHK :</label>
//           <select>
//             <option>select</option>
//             <option>1 BHK</option>
//             <option>2 BHK</option>
//             <option>3 BHK</option>
//             <option>Bungalow</option>
//           </select>
//         </div>

//         <input type="submit" value="Submit" style={styles.submit} />
//       </div>
//     </div>
    
//   );
// }
 



// const styles = {
 

 
//   page: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",        
//     backgroundColor: "transparent",
   
//    },
   

//   container: {
    
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     padding: "20px",
//     backgroundColor:"rgba(9, 118, 176, 0.5)",
//     borderRadius: "8px",
//     boxShadow:  "0 2px 6px rgba(255, 254, 254, 1)",
//     width: "320px"
//   },

//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center"
//   },

//   submit: {
//     marginTop: "15px",
//     padding: "8px",
//     cursor: "pointer"
//   },
//   title:{
//     color:"white"
//   } 
  
// };

// export default Login;

 import { useEffect, useRef, useState } from "react";

function SignIn() {

  const cardRef = useRef(null);

  const [username,setUsername] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [bhk,setBhk] = useState("");

  // Signup API
  async function handleSignup(){

    try{

      const res = await fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,
          phone,
          email,
          password,
          bhk
        })
      });

      const data = await res.json();

      if(data.success){

        alert("Account created successfully");

        // form reset
        setUsername("");
        setPhone("");
        setEmail("");
        setPassword("");
        setBhk("");

        // redirect to login
        window.location.href="/login";

      }else{

        alert(data.message);

      }

    }catch(error){

      console.error("Signup error:",error);
      alert("Server error");

    }

  }

  // Card animation
  useEffect(()=>{

    const handleMouseMove = (e)=>{

      const x = (window.innerWidth/2 - e.pageX)/25;
      const y = (window.innerHeight/2 - e.pageY)/25;

      if(cardRef.current){

        cardRef.current.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

      }

    };

    document.addEventListener("mousemove",handleMouseMove);

    return ()=>{
      document.removeEventListener("mousemove",handleMouseMove);
    };

  },[]);

  return (

    <div className="login-container">

      <div className="login-card" ref={cardRef}>

        <h2>Sign In</h2>

        <div className="input-group">
          <input 
          type="text"
          required
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>

        <div className="input-group">
          <input
          type="tel"
          required
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          />
          <label>Phone Number</label>
        </div>

        <div className="input-group">
          <input
          type="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <label>Email ID</label>
        </div>

        <div className="input-group">
          <input
          type="password"
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <div className="input-group">
          <select
          required
          value={bhk}
          onChange={(e)=>setBhk(e.target.value)}
          >
            <option value=""></option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>Villa</option>
          </select>
          <label>BHK</label>
        </div>

        <button onClick={handleSignup}>
          Sign In
        </button>

      </div>

    </div>

  );
}

export default SignIn;