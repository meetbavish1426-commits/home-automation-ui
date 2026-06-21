import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {

  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

async function startLogin() {

  if (!phoneOrEmail || !password) {
    alert("Enter phone/email and password");
    return;
  }

  setLoading(true);

  try {

    const res = await fetch(
      "https://backend-ddkea1yz9-meetbavish1426-1401s-projects.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneOrEmail,
          password,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {

      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);

      alert("Login successful");

      navigate("/dashboard");

    } else {
      alert(data.message);
    }

  } catch (error) {

    console.log(error);
    alert("Server error");

  } finally {
    setLoading(false);
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

<form
  onSubmit={(e) => {
    e.preventDefault();
    startLogin();
  }}
>
  <button
    type="submit"
    disabled={loading}
    className="flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
  >
    {loading && (
      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
    )}

    {loading ? "Logging In..." : "Login"}
  </button>
</form>

      </div>

    </div>

  );

}