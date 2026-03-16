import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";


const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="px-2 bg-slate-200">
      <div className="flex justify-between items-center w-full h-20 ">
        <h1 className="text-2xl font-bold text-slate-950">Navbar</h1>

        {session ? (
          <div className="flex items-center gap-3">
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.fullname || ""}
                width={25}
                height={25}
                unoptimized
                className="rounded-full"
              />
            )}
            <p className="text-slate-900">Hello, {session.user?.fullname}</p>
            <button
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
              className="text-red-600 font-bold hover:underline"
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="text-slate-900 border border-slate-900 px-4 py-1 h-10 rounded-lg font-bold hover:bg-slate-900 hover:text-white transition-all"
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
