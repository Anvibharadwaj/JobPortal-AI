import React, { useState } from "react";
import Input from "../../components/Inputs/Input";

const Signup = ({ setCurrentPage }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!fullName || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Email validation (simple check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Password validation (minimum 8 characters)
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Clear error if form is valid
    setError(null);
    console.log("Form submitted", { fullName, email, password });

    // You can add logic to handle the actual signup request here
    // Example: await api.signup({ fullName, email, password });

    // Reset form fields
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-s text-slate-700 mt-[20px] mb-6">
        Join us today by entering your details.
      </p>
      <form onSubmit={handleSignup}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="Anvi"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="anvi@gmail.com"
            type="email"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 char"
            type="password"
          />
        </div>
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
        <p className="text-[17px] text-slate-800 mt-3">
          Already have an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("Login");
            }}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
