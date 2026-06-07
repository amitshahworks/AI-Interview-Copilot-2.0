import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4">
          Welcome {user?.name}
        </p>
        <button
        onClick={() => navigate("/interview/setup")}
        className="mt-4 rounded border px-6 py-3"
      >
        Start Interview
      </button>
      </div>
    </div>
  );
}

export default Dashboard;