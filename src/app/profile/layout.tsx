import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Your Profile • FileMint",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo text-center">
          {/* <Image
            src="/logo.png" // Use your correct path for the image here
            alt="FileMint Logo"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <span className="text-2xl font-semibold text-indigo-600">OB</span> */}
        </div>
        <nav>
          <ul className="text-lg font-medium text-gray-700">
            {/* <li>
              <Link href="/profile" className="hover:bg-gray-200 p-2 rounded-md block">Account</Link>
            </li>
            <li>
              <Link href="/profile/subscription" className="hover:bg-gray-200 p-2 rounded-md block">Subscription</Link>
            </li>
            <li>
              <Link href="/profile/settings" className="hover:bg-gray-200 p-2 rounded-md block">Settings</Link>
            </li> */}
          </ul>
        </nav>
        {/* <Link
          href="/logout"
          className="mt-auto block px-8 py-4 bg-indigo-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          <i className="fas fa-sign-out-alt mr-2" />
          Log Out
        </Link> */}
      </aside>

      {/* Main content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
