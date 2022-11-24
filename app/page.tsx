import Home from "@components/View/Home";
import { unstable_getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await unstable_getServerSession();
  return (
    <div className="flex flex-row">
      <Home session={session} />
    </div>
  );
}
