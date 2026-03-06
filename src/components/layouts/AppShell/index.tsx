import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default AppShell;
