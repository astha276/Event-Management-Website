import React, { useState } from "react";
import "./Login.css"; // Using the same CSS file

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Password Validation for Signup
  const validatePassword = (password) => {
    const minLength = /.{6,}/;           // At least 6 characters
    const upperCase = /[A-Z]/;           // At least 1 uppercase letter
    const number = /[0-9]/;              // At least 1 number
    const specialChar = /[!@#$%^&*]/;    // At least 1 special character

    return (
      minLength.test(password) &&
      upperCase.test(password) &&
      number.test(password) &&
      specialChar.test(password)
    );
  };

  // Handle Login or Signup
  const handleAuth = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isLogin && !validatePassword(password)) {
      alert(
        "Password must have at least 6 characters, 1 uppercase letter, 1 number, and 1 special symbol."
      );
      return;
    }

    alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");
    window.location.href = "/"; // Redirect to homepage after login/signup
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder={isLogin ? "Password" : "Set New Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleAuth}>{isLogin ? "Login" : "Sign Up"}</button>
      <p className="switch">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a href="#" onClick={() => setIsLogin(true)}>Login</a>
          </>
        )}
      </p>
    </div>
  );
};

export default Login;
