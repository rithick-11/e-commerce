import React, { useState } from "react";
import "./LoginAdmin.css";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    const data = JSON.stringify({ username, password });
    console.log(data);
  };
  return (
    <section className="bg-login-form">
      <main className="w-22 bg-zinc-400/50 text-white py-10 px-7 rounded-lg border-[1px] border-white/50">
        <h1 className="text-center mb-7 text-xl font-medium">Login As Admin</h1>
        <form className="flex flex-col gap-3" onSubmit={onLogin}>
          <input
            type="text"
            required
            className="bg-black/40 px-4 py-2 rounded"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            required
            className="bg-black/40 px-4 py-2 rounded"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black self-center px-2 py-2 font-bold rounded w-1/2"
            value={password}
          >
            login
          </button>
        </form>
      </main>
    </section>
  );
};

export default LoginAdmin;