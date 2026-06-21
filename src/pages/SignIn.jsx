import { useEffect, useRef, useState } from "react";

function SignIn() {

  const cardRef = useRef(null);

  const [username,setUsername] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [bhk,setBhk] = useState("");
  const [loading, setLoading] = useState(false);


  // Signup API
 async function handleSignup() {
  setLoading(true);

  try {
    const res = await fetch(
      "https://backend-seven-green-81.vercel.app/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          phone,
          email,
          password,
          bhk,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("Account created successfully");

      setUsername("");
      setPhone("");
      setEmail("");
      setPassword("");
      setBhk("");

      window.location.href = "/login";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("Server error");
  } finally {
    setLoading(false);
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

        <h2>Sign Up</h2>

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

<button
  onClick={handleSignup}
  disabled={loading}
  className="flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <span className="loader"></span>
      Signing Up...
    </>
  ) : (
    "Sign Up"
  )}
</button>

      </div>

    </div>

  );
}

export default SignIn;