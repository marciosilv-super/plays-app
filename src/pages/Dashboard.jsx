import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";


export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = auth.currentUser;
    setUser(u);
  }, []);

  const logout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* TOPO */}
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Plays App</h1>

        <div className="flex items-center gap-3">
          {user && (
            <span className="text-gray-700 text-sm">
              Logado como <strong>{user.email}</strong>
            </span>
          )}

          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      {/* ÁREA PRINCIPAL */}
      <main className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Atividades em andamento
        </h2>

        {/* Placeholder temporário */}
        <div className="text-gray-600">
          Nenhum card criado ainda.  
          <br />
          O botão + ficará aqui futuramente para criar partidas.
        </div>
      </main>
    </div>
  );
}
