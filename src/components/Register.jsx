import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/login')
  }
  return (
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to={"/login"} className="link-primary">
               Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
            value={user.name}
            onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}
              name="name"
              type="text"
              className="form-control mt-1"
              placeholder="Joe Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            value={user.email}
            onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}
              name='email'
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            value={user.password}
            onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}
              name='password'
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register