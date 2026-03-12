import FormRegister from "@/components/fragments/FormRegister";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };

    try {
      const result = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await result.json();
      if (result.status === 200) {
        event.target.reset();
        setIsLoading(false);
        push("/auth/login");
      } else {
        setError(responseData.message || "Registrasi gagal ");
      }
    } catch (error) {
      setError("Terjadi kesalahan jaringan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm border shadow-lg p-10 rounded-lg">
        {/* Brand mark */}
        <div className="mb-10">
          <div className="w-8 h-8 bg-slate-900 rounded-sm mb-6" />
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            Buat akun baru
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Sudah punya akun?{" "}
            <Link
              href="/auth/login"
              className="text-slate-900 font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Masuk disini
            </Link>
          </p>
          {error && (
            <p className="text-red-500 text-sm mt-4 bg-red-50 p-2 rounded border border-red-100">
              {error}
            </p>
          )}
        </div>

        {/* Form */}
        <FormRegister handleSubmit={handleSubmit} isLoading={isLoading} />

        {/* Footer note */}
        <p className="text-center text-xs text-slate-400 mt-8 leading-relaxed">
          Dengan mendaftar, kamu menyetujui{" "}
          <span className="text-slate-500 underline underline-offset-2 cursor-pointer">
            Syarat & Ketentuan
          </span>{" "}
          kami.
        </p>
      </div>
    </div>
  );
};

export default RegisterView;
