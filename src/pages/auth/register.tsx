import Link from 'next/link'

const RegisterPage = () => {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Register Page</h1>
      <p>Sudah punya akun ? login <Link href="/auth/login">disini</Link></p>
    </div>
  )
}

export default RegisterPage
