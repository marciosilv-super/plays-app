
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => signInWithEmailAndPassword(auth, email, password);
  const google = () => signInWithPopup(auth, new GoogleAuthProvider());

  return (
    <div className='h-screen flex items-center justify-center bg-gray-200'>
      <div className='bg-white p-6 rounded shadow w-80'>
        <h1 className='text-xl mb-4 text-center'>Login</h1>
        <input className='border p-2 w-full mb-2' placeholder='Email' onChange={e=>setEmail(e.target.value)} />
        <input className='border p-2 w-full mb-2' placeholder='Senha' type='password' onChange={e=>setPassword(e.target.value)} />
        <button className='bg-blue-500 text-white w-full p-2 rounded mb-2' onClick={login}>Entrar</button>
        <button className='bg-red-500 text-white w-full p-2 rounded' onClick={google}>Entrar com Google</button>
      </div>
    </div>
  );
}
