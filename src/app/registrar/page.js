"use client";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registrar() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [valido, setValido] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleEmail(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setErroEmail(
      emailValue && !validarEmail(emailValue) ? "Email inválido" : ""
    );
  }

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
    <>
      <NavBar />
      <div
        className="bg-gradient-to-b from-blue-300 to-amber-200
        "
      >
        <div className="flex flex-col  items-center justify-center h-screen )">
          <div className="bg-amber-50 p-20 border-2 border-amber-600 rounded-3xl gap-4 flex flex-col">
            <h1 className="text-4xl font-bold pb-10 bg">Criar Conta</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                className="p-1 rounded-2xl border-2 border-amber-600 bg-amber-50"
              />

              <span className="text-red-600">{erroEmail}</span>

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
                disabled={erro || erroEmail || senha.length === 0 || !email}
                className="rounded-2xl bg-amber-400 text-black font-bold py-2 mt-3 disabled:opacity-70"
              >
                Criar Conta
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
