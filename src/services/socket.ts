import { io } from "socket.io-client";

const ioClient = io(`ws:${process.env.NEXTAUTH_URL}` ?? '');

// Handle on server


export default ioClient;
