export default function PasswordForm() {
  return (
    <div>
      <h3 className="text-xl font-semibold">Change Password</h3>
      <div className="mt-4 space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Repeat New Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button className="mt-4">Save Changes</button>
    </div>
  );
}
