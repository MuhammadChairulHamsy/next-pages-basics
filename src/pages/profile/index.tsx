import { useSession } from 'next-auth/react';

const ProfilePage = () => {
     const { data: session } = useSession();
  return (
    <div>
      <h1 className='text-slate-900'>Profile</h1>
      <p className="text-slate-900">{session && session.user?.fullname}</p>
    </div>
  )
}

export default ProfilePage
