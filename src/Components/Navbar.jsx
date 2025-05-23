import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ username }) {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Quizzy
      </Link>
      {username && (
        <div className="text-sm">
          Hello, <strong>{username}</strong>
        </div>
      )}
    </nav>
  );
}
