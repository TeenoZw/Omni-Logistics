interface User {
  name?: string;
  id?: string;
}

interface DashboardProps {
  currentUser: User | null;
  isVisible: boolean;
  onLogout: () => void;
}

export default function Dashboard({
  currentUser,
  isVisible,
  onLogout,
}: DashboardProps) {
  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Welcome back, {currentUser?.name || "User"}!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Fleet Overview</h2>
            <p className="text-3xl font-bold text-blue-600">247</p>
            <p className="text-gray-600">Active Vehicles</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Alerts</h2>
            <p className="text-3xl font-bold text-orange-600">3</p>
            <p className="text-gray-600">Active Alerts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Efficiency</h2>
            <p className="text-3xl font-bold text-green-600">94%</p>
            <p className="text-gray-600">Fleet Efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
