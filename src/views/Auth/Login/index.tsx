import FormLogin from "@/components/fragments/FormLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginViews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
 

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl
      })

      if(!res?.error) {
        setIsLoading(false);
        push(callbackUrl)
      } else {
        setIsLoading(false);
        setError("Email atau kata sandi salah.");
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
            Selamat datang
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Belum membuat akun?{" "}
            <Link
              href="/auth/register"
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
        <FormLogin handleSubmit={handleSubmit} isLoading={isLoading}  />

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

export default LoginViews;
