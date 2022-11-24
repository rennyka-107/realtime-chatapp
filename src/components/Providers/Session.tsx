'use client';
import { getSession, SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  session: Awaited<ReturnType<typeof getSession>>;
};

const ProviderSession = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default ProviderSession;
