import Link from "next/link"
import { useRouter } from "next/router"

const LoginViews = () => {
     const {push} = useRouter();
    const handleLogin = () => {
        push("/product")
    }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
       <h1>Login Page</h1>
       <button onClick={() => handleLogin()} className="p-1 border rounded-lg">Login</button>
        <p>Belum punya akun ? registrasi <Link href="/auth/register">disini</Link></p>
    </div>
    </div>
  )
}

export default LoginViews
