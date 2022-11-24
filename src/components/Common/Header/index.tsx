import { unstable_getServerSession } from "next-auth";
import AvatarUser from "../AvatarUser";
import ButtonLogout from "../Button";

type Props = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};

export default function Header({ session }: Props) {
  return (
    <div className="pt-6 relative z-50 flex justify-around">
      <div>
        <AvatarUser imgSrc={session?.user?.image || ""} />
      </div>
      <ul className="ring-1 ring-zinc-900 shadow-2xl px-3 rounded-full flex-1 max-w-fit flex justify-center">
        <li>
          <a
            className="font-semibold relative block px-3 py-2 hover:text-teal-400"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="font-semibold relative block px-3 py-2 hover:text-teal-400"
            href="/chat-room"
          >
            Chat Room
          </a>
        </li>
      </ul>
      {session?.user ? <ButtonLogout /> : <AvatarUser imgSrc={session?.user?.image || ""} />}
    </div>
  );
}
