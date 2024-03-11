import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios"

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });

      setName("")
      setEmail("")
      setPassword("")
      
      alert('Registration successful. Now you can log in');

      window.location.reload();
      window.location.href = "/login"

      if(true) {
        return <Navigate to={"/"} />
      }
    

    } catch (e) {
      if (e.response && e.response.data && e.response.data.error) {
        alert(`Error: ${e.response.data.error}`);
      } else {
        // Default error message
        alert('Registration failed. Please try again later');
      }
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label className="register-info-label"><span className="register-info-label-star">*</span>Name should be more than 3 characters</label>
          <input
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label className="register-info-label"><span className="register-info-label-star">*</span>email should be valid</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <label className="register-info-label"><span><span className="register-info-label-star">*</span>6+ chars, upper/lowercase, num, special char.</span></label>
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member ?
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>  
        </form>
      </div>
    </div>
  );
}
