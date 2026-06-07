import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4">
          Welcome {user?.name}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;