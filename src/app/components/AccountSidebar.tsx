import { User, Diamond, Settings, LogOut } from "lucide-react";

interface AccountSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AccountSidebar = ({ activeTab, setActiveTab }: AccountSidebarProps) => {
  const menuItems = [
    { id: "account", label: "Account", icon: User },
    { id: "subscription", label: "Subscription", icon: Diamond },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-8 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">FileMint</h1>
      </div>

      <div className="p-8 border-b border-gray-100">
        <div className="flex items-center justify-center mb-4">
          <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-white text-xl font-semibold">
            OB
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center px-4 py-3 text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;
