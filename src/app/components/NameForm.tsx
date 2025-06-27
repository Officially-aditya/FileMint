export default function NameForm() {
  return (
    <div>
      <h3 className="text-xl font-semibold">Name</h3>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button className="mt-4">Save Changes</button>
    </div>
  );
}
