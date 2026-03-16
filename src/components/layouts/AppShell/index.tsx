import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Roboto } from 'next/font/google'


type AppShellProps = {
  children: React.ReactNode;
};

const Navbar = dynamic(() => import("../Navbar/index"), {
  ssr: false,
})

const roboto = Roboto({
  weight: ['400', "700"],
  subsets: ['latin'],
})

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <>
       <main className={roboto.className}> 
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
    </>
  );
};

export default AppShell;
