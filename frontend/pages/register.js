import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  // If validation errors exist
  if (!res.ok) {
    if (data.errors && data.errors.length > 0) {
      alert(data.errors[0].msg);
    } else {
      alert(data.message || "Registration failed");
    }
    return; // IMPORTANT: stop here
  }

  alert("User registered successfully");
  router.push("/login");
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">
                    Register
                </h2>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full mb-4 p-2 border rounded text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

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

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded cursor-pointer"
                >
                    Register
                </button>
            </form>
        </div>
    );
}