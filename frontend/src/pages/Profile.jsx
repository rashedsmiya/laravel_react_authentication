import React from 'react'

export default function Profile() {
  return (
<div className="bg-gray-100 font-sans">
<div className="flex min-h-screen">

  {/* Sidebar */}
  <aside className="w-64 bg-gradient-to-b from-indigo-700 to-purple-700 text-white flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-bold p-6">Dashboard</h2>
      <nav className="px-4 space-y-2">
        <a href="#" className="block bg-indigo-600 rounded-lg px-4 py-2">
          Profile
        </a>
        <a href="#" className="block hover:bg-indigo-600 rounded-lg px-4 py-2">
          Logout
        </a>
      </nav>
    </div>

    {/* User */}
    <div className="p-4 bg-indigo-800 m-4 rounded-lg flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-indigo-400"></div>
      <div>
        <p className="font-semibold text-sm">John Doe</p>
        <p className="text-xs text-indigo-200">john@example.com</p>
      </div>
    </div>
  </aside>

  {/* Main Content */}
  <main className="flex-1 p-8">

    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="flex items-center gap-3">
        <p className="text-gray-500 text-sm">Welcome back, John!</p>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>

    {/* Top Section */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Personal Info */}
      <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-4">Personal Information</h3>
        <div className="space-y-3 text-gray-600 text-sm">
          <p><span className="font-medium text-gray-700">Full Name</span><br />John Doe</p>
          <p><span className="font-medium text-gray-700">Email</span><br />john@example.com</p>
          <p><span className="font-medium text-gray-700">Member Since</span><br />January 15, 2023</p>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold mb-4">Profile Picture</h3>
        <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <button className="text-indigo-600 text-sm hover:underline">
          Change Photo
        </button>
      </div>
    </div>

    {/* Update Form */}
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h3 className="font-semibold mb-4">Update Information</h3>
      <form className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  </main>
</div>
</div> 
  )
}
