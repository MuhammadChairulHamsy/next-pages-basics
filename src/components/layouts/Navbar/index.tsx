import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className='px-2 bg-slate-200'>
      <div className='flex justify-between items-center w-full h-20 '>
        <h1 className='text-2xl font-bold text-slate-950'>Navbar</h1>
        
        {session ? (
          <div className='flex items-center gap-3'>
            <p className='text-slate-900'>{session.user?.email}</p>
            <button onClick={() => signOut()} className='text-red-600 font-bold'>Sign out</button>
          </div>
        ) : (
          <button onClick={() => signIn()} className='text-slate-900 border p-1 h-10 rounded-lg font-bold'>
            Sign in
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
