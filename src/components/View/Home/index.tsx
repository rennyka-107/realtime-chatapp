import { getSession } from "next-auth/react";
import React from "react";

type Props = {
  session: Awaited<ReturnType<typeof getSession>>
};

const Home = ({session}: Props) => {
  return (
    <div className="w-full flex justify-center mt-[50px]">
      <a className="rounded-md bg-blue px-[20px] py-[10px] text-white hover:bg-green" href="/auth/signin">{session?.user ? 'Welcome to chat room' : 'Chuyển sang màn hình đăng nhập'}</a>
    </div>
  );
};

export default Home;
