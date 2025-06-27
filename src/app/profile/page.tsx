'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SubscriptionPage from '../components/SubscriptionPage';  // Import SubscriptionPage
import SettingsPage from '../components/SettingsPage';  // Import SettingsPage

export default function AccountPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [repeatPwd, setRepeatPwd] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const [activePage, setActivePage] = useState('account'); // Manage page view
  const [notification, setNotification] = useState<string | null>(null); // Notification state

  const handleNavigation = (page: string) => {
    setActivePage(page);
    setNotification(null); // Reset notification on page change
  };

  const saveChanges = () => {
    setNotification('Your changes have been saved successfully!'); // Example notification
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Section */}
      <aside className="w-80 bg-white shadow-lg p-8 flex flex-col items-start space-y-8 border-r-2 border-gray-200">
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/logo.png" // Your logo path here
            alt="FileMint Logo"
            width={96}
            height={96}
            className="full border-4 border-indigo-600 mb-4"
          />
          <span className="text-3xl font-bold text-gray-800">OB</span>
        </div>

        {/* Navigation Links */}
        <nav className="w-full">
          <ul className="space-y-6">
            {/* Account Button */}
            <li>
              <button
                onClick={() => handleNavigation('account')}
                className={`text-2xl font-bold text-gray-700 flex items-center space-x-3 hover:text-indigo-600 ${activePage === 'account' ? 'bg-indigo-100 p-3 rounded-md' : ''}`}
              >
                <i className="fas fa-user text-xl"></i>
                <span className="text-xl font-bold">Account</span>
                {activePage === 'account' && <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-full">Active</span>}
              </button>
            </li>

            {/* Subscription Button */}
            <li>
              <button
                onClick={() => handleNavigation('subscription')}
                className={`text-2xl font-bold text-gray-700 flex items-center space-x-3 hover:text-indigo-600 ${activePage === 'subscription' ? 'bg-indigo-100 p-3 rounded-md' : ''}`}
              >
                <i className="fas fa-gem text-xl"></i>
                <span className="text-xl font-bold">Subscription</span>
                {activePage === 'subscription' && <span className="bg-green-500 text-white text-xs py-1 px-2 rounded-full">Pro</span>}
              </button>
            </li>

            {/* Settings Button */}
            <li>
              <button
                onClick={() => handleNavigation('settings')}
                className={`text-2xl font-bold text-gray-700 flex items-center space-x-3 hover:text-indigo-600 ${activePage === 'settings' ? 'bg-indigo-100 p-3 rounded-md' : ''}`}
              >
                <i className="fas fa-cogs text-xl"></i>
                <span className="text-xl font-bold">Settings</span>
                {activePage === 'settings' && <span className="bg-yellow-500 text-white text-xs py-1 px-2 rounded-full">New</span>}
              </button>
            </li>
          </ul>
        </nav>

        {/* Log Out Button */}
        <button
          className="mt-auto px-6 py-4 bg-indigo-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all"
        >
          <i className="fas fa-sign-out-alt mr-2"></i>
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 space-y-8">
          {/* Notification */}
          {notification && (
            <div className="p-4 bg-green-100 text-green-700 rounded-md mb-4">
              <i className="fas fa-check-circle mr-2"></i>{notification}
            </div>
          )}

          {activePage === 'account' && (
            <>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Account</h1>
              {/* Profile Section */}
              <div className="flex items-center gap-6 mb-8">
                <Image
                  src="/profile-icon.png" // Your profile image path here
                  alt="Your avatar"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-gray-300 shadow-md"
                />
                <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2 font-semibold">
                  <i className="fas fa-pencil-alt"></i>
                  Update profile
                </button>
              </div>

              {/* Account Details */}
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700">Email</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">oliviabennet123@gmail.com</span>
                  <button className="text-blue-600 hover:underline">Change</button>
                </div>
              </section>
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700">Name</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button onClick={saveChanges} className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all">
                    Save Changes
                  </button>
                </div>
              </section>
              {/* Change Password Section */}
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700">Change Password</h3>
                <div className="space-y-6 max-w-md">
                  <div className="relative">
                    <input
                      type={showCurrent ? 'text' : 'password'}
                      placeholder="Current Password"
                      value={currentPwd}
                      onChange={(e) => setCurrentPwd(e.target.value)}
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      <i className={`fas fa-eye${showCurrent ? '' : '-slash'}`}></i>
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showNew ? 'text' : 'password'}
                      placeholder="New Password"
                      value={newPwd}
                      onChange={(e) => setNewPwd(e.target.value)}
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={() => setShowNew(!showNew)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      <i className={`fas fa-eye${showNew ? '' : '-slash'}`}></i>
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showRepeat ? 'text' : 'password'}
                      placeholder="Repeat New Password"
                      value={repeatPwd}
                      onChange={(e) => setRepeatPwd(e.target.value)}
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={() => setShowRepeat(!showRepeat)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      <i className={`fas fa-eye${showRepeat ? '' : '-slash'}`}></i>
                    </button>
                  </div>
                  <button onClick={saveChanges} className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all">
                    Save Changes
                  </button>
                </div>
              </section>
            </>
          )}

          {activePage === 'subscription' && <SubscriptionPage />}
          {activePage === 'settings' && <SettingsPage />}
        </div>
      </main>
    </div>
  );
}
