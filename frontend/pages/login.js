import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
    <form
      onSubmit={handleLogin}
      className="bg-white p-8 rounded shadow-md w-96"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-2 border rounded text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-2 border rounded text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Login
      </button>

      <p className="mt-4 text-sm text-center">
        Don’t have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => router.push("/register")}
        >
          Register
        </span>
      </p>
    </form>
  </div>
);
}