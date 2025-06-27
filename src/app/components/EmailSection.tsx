type Props = {
  email: string;
  onChange: () => void;
};

export default function EmailSection({ email, onChange }: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-2">Email</h2>
      <p className="text-gray-700 mb-2">{email}</p>
      <button
        onClick={onChange}
        className="text-blue-600 hover:underline font-medium"
      >
        Change
      </button>
    </div>
  );
}
