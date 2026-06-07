import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function InterviewSetup() {
  const [mode, setMode] = useState("technical");

  const navigate = useNavigate();
  const { token } = useAuth();

  const handleCreateInterview = async () => {
    try {
      const response = await api.post(
        "/interviews/create",
        {
          mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const interviewId =
        response.data.interview._id;

      navigate(`/interview/${interviewId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to create interview");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Start Interview
        </h1>

        <select
          value={mode}
          onChange={(e) =>
            setMode(e.target.value)
          }
          className="mb-6 w-full rounded border p-3"
        >
          <option value="hr">
            HR Interview
          </option>

          <option value="technical">
            Technical Interview
          </option>

          <option value="mixed">
            Mixed Interview
          </option>
        </select>

        <button
          onClick={handleCreateInterview}
          className="w-full rounded border p-3 font-semibold"
        >
          Start Interview
        </button>
      </div>
    </div>
  );
}

export default InterviewSetup;