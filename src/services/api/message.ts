import ioClient from "services/socket";
import { v4 as uuid } from "uuid";

export type ObjectMessage = {
  content: string;
  name: string;
  email: string;
  createdAt: number;
  id?: string;
  image: string;
};

export async function sendMessage(objectMessage: ObjectMessage) {
  try {
    ioClient.emit("send-message-to-server", { ...objectMessage, id: uuid() });
  } catch (err) {
    console.log(err);
  }
}

export async function getListMessages() {
  const res = await fetch("api/get-messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return res.json();
}
