import React from "react"
import { Link, useNavigate } from 'react-router'
import api from '../api/api'

export default function Login(){
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [remember, setRemember] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Form validation
    if (!email || !password) {
      setError('All fields are required')
      setLoading(false)
      return
    }

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      })
      
      // Store token if returned
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      
      // Redirect to profile on success
      alert('Login successful!')
      navigate('/profile')
    } catch (err) {
      if (err.response) {
        const message = err.response.data.message || err.response.data.error || 'Login failed'
        setError(message)
      } else if (err.request) {
        setError('Network error. Please check your connection.')
      } else {
        setError('An error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return(
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Sign in to your account
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input 
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input 
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Button */}
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 text-white rounded-lg transition ${
                loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t"></div>
            <span className="mx-3 text-gray-400 text-sm">Or continue with</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?
            <Link to="/register" className="text-indigo-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    )
}