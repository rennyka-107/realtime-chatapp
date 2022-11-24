"use client";
import InputChat from "@components/Common/InputChat";
import ListMessage from "@components/Common/ListMessage";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { getListMessages, sendMessage } from "services/api/message";
import ioClient from "services/socket";

type Props = {};

const ChatRoom = ({}: Props) => {
  const [listMessage, setListMessage] = useState<any[]>([]);
  const { data: session } = useSession();
  console.log(session, "chat room session");
  useEffect(() => {
    socketInitializer();
    fetchListMessage();
  }, []);

  useEffect(() => {
    ioClient.on("send-message-to-client", (objMsg) => {
      console.log(objMsg, "obj msg");
      setListMessage([...listMessage, objMsg]);
    });
  }, [listMessage, ioClient]);

  async function fetchListMessage() {
    try {
      const res = await getListMessages();
      if (res.data) {
        setListMessage(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const socketInitializer = async () => {
    await fetch("/api/socket");

    ioClient.on("connect", () => {
      console.log("connected");
    });
  };
  return (
    <div className="flex flex-col w-1/2 mt-[20px]">
      <ListMessage messages={listMessage} currentUser={session?.user} />
      {session?.user ? <InputChat sendMessage={sendMessage} /> : null}
    </div>
  );
};

export default ChatRoom;
