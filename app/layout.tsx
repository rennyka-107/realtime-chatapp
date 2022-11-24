import Footer from "@components/Common/Footer";
import Header from "@components/Common/Header";
import ProviderSession from "@components/Providers/Session";
import { unstable_getServerSession } from "next-auth";
import "./global.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head></head>
      <body>
        <Header session={session} />
        <ProviderSession session={session}>{children}</ProviderSession>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
