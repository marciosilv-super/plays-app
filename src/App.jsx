
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, u => setUser(u));

  if (!user) return <LoginPage />;
  return <Dashboard user={user} />;
}
