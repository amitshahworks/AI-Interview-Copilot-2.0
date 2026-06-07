import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      login(
        response.data.token,
        response.data.user
      );

      navigate("/dashboard");
    } catch (error: unknown) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };

      alert(
        axiosError.response?.data?.message ||
          (error instanceof Error ? error.message : "Login failed")
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg border p-6 shadow"
      >
        <h1 className="mb-6 text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="mb-4 w-full rounded border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="mb-4 w-full rounded border p-3"
        />

        <button
          type="submit"
          className="w-full rounded border p-3 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;