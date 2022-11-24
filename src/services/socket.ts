import { io } from "socket.io-client";

const ioClient = io(process.env.NEXTAUTH_URL ?? '');

// Handle on server


export default ioClient;
