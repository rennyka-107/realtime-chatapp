"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { ObjectMessage } from "services/api/message";

type Props = {
  sendMessage: (objMsg: ObjectMessage) => void;
};

const InputChat = (props: Props) => {
  const { data: session } = useSession();
  const { sendMessage } = props;
  const [value, setValue] = useState<string>("");
  return (
    <div className="w-full flex flex-col">
      <p className="basis-1/12 mx-5 mt-[30px] text-purple">Send message</p>
      <div className="flex flex-row mx-5 my-2 gap-5">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          className="basis-11/12 border px-3 py-3 rounded-lg"
        />
        <button
          type="button"
          className="basis-1/12 rounded-md border px-3 py-3 hover:bg-blue hover:text-white"
          onClick={() => {
            sendMessage({
              content: value,
              name: session?.user?.name || "",
              email: session?.user?.email || "",
              createdAt: Date.now(),
              image: session?.user?.image || "",
            });
            setValue("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default InputChat;
