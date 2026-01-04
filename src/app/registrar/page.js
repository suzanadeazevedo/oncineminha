"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registrar() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [valido, setValido] = useState("");

  function handleSenha(e) {
    const senha = e.target.value;
    setSenha(senha);
    setErro(senha.length < 8 ? "Senha muito curta" : "");
    setValido(senha.length >= 8 ? "Senha valida" : "");
    /*if (senha.length < 8) {
      setErro("Senha muito curta");
    } else {
      setErro("");
      setValido("Senha valida");
    }*/
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <div className="flex flex-col  items-center justify-center h-screen )">
      <h1 className="text-4xl font-bold pb-10">Criar Conta</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col">
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
          onChange={handleSenha}
          className="p-1 rounded-2xl border-2 border-amber-600 bg-amber-50"
        />

        <span className="text-red-600">{erro}</span>
        <span className="text-green-600">{valido}</span>

        <button
          disabled={erro}
          className="rounded-2xl bg-amber-400 text-black font-bold py-2 mt-3 disabled:opacity-70"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}
