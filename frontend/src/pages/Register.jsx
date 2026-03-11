import React from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../api/api'

export default function Register() {

  const navigate = useNavigate()
  const [name, setname] = React.useState('')
  const [email, setemail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const [confirmPassword, setconfirmPassword] = React.useState('')
  const [terms, setterms] = React.useState(false)
  const [loading, setloading] = React.useState(false)
  const [error, setError] = React.useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setError('');

    // Form validation
    if(!name || !email || !password || !confirmPassword) {
      setError('All fields are required')
      setloading(false);
      return
    }

    if(password !== confirmPassword){
      setError('Passwords do not match')
      setloading(false);
      return
    }

    if(password.length < 6) {
      setError('Password must be at least 6 characters')
      setloading(false);
      return
    }

    if(!terms) {
      setError('You must agree to the terms and conditions')
      setloading(false);
      return
    }

    try{
      const response = await api.post('/register', {name, email, password});
        console.log(response.data);
        if(response.data.status === 200){
          successeError(response.data.message);
          navigate('/');
        }else{
          setError(response.data.message);
        }

      }catch(error){
        console.log(error);
      }finally{
        setloading(false);
      }

    try{
      const response = await api.post('/register', {
        name: name,
        email: email,
        password: password,
      })
      // Show success message and redirect to login
      alert('Registration successful! Please login with your credentials.')
      navigate('/')
    }catch(error){
      // Handle error response from server
      if (error.response) {
        // Server responded with error status
        const message = error.response.data.message || error.response.data.error || 'Registration failed'
        setError(message)
      } else if (error.request) {
        // Request made but no response
        setError('Network error. Please check your connection.')
      } else {
        setError('An error occurred. Please try again.')
      }
    }finally{
      setloading(false)
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">

    <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-indigo-600">
        Create Account
      </h2>
      
      <p className="text-center text-gray-500 mt-2 mb-6">
        Join us today
      </p>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>

        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          value={email}
          onChange={(e) => setemail(e.target.value)}
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
         onChange={(e) => setpassword(e.target.value)}
         />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" className="mt-1" 
          checked={terms}
          onChange={(e) => setterms(e.target.checked)}
          />
          <p>
            I agree to the 
            <a href="#" className="text-indigo-600 hover:underline">Terms</a> 
            and 
            <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
          </p>
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
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t"></div>
        <span className="mx-3 text-gray-400 text-sm">Or sign up with</span>
        <div className="flex-grow border-t"></div>
      </div>

      {/* Sign In */}
      <p className="text-center text-sm text-gray-500">
        Already have an account?
        <Link to="/" className="text-indigo-600 font-medium hover:underline">
          Sign in
        </Link>
      </p>

    </div>

    </div>
  )
}
