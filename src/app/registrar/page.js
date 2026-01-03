//eito ate os 22min do 4 video

"use client";
import { useState } from "react";

export default function Registrar() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div className="flex flex-col  items-center justify-center h-screen )">
      <h1 className="text-4xl font-bold pb-10">Criar Conta</h1>
      <form action="" className=" flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-1 rounded-2xl border-2 border-amber-600 bg-amber-50"
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-1 rounded-2xl border-2 border-amber-600 bg-amber-50"
        />

        <button className="rounded-2xl bg-amber-400 text-black font-bold py-2 mt-3 ">
          Criar Conta
        </button>
      </form>
    </div>
  );
}
