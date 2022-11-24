import React from "react";

type Props = {
  messages: any[];
  currentUser: any
};

const ListMessage = (props: Props) => {
  const { messages, currentUser } = props;
  return (
    <div className="mx-5 mt-[50px] border px-2 py-2 rounded-lg min-h-[300px]">
      {(messages.length > 0
        ? messages.sort((a, b) => a.createdAt - b.createdAt)
        : []
      ).map((msg) => (
        <div
          key={msg.id}
          className={`flex flex-row ${
            msg.email === currentUser?.email ? "justify-end" : "justify-start"
          } items-center gap-2 mt-2 `}
        >
          <img
            alt="Mizael kun"
            src={msg.image ?? "https://i.pinimg.com/564x/f0/3c/4f/f03c4fd2cd19f63ad1e76e899d73882f.jpg"}
            className={`${
              msg.email === currentUser?.email ? "order-last" : ""
            } w-[45px] h-[45px] rounded-full`}
          />
          <div
            className={`w-2/4 px-3 py-3 ${
              msg.email === currentUser?.email ? "bg-blue" : "bg-red"
            } rounded-lg text-[#FFFFFF]`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListMessage;
