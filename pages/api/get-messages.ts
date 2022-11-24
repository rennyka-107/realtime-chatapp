// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import RedisClient from "services/redis";
type Data = {
  status: number;
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await RedisClient.hgetall("message");
    const originData = Object.values(result);
    return res
      .status(200)
      .json({  
        status: 200,
        message: "Success",
        data: originData.map((it) => JSON.parse(it)),
      });
  } catch (err: any) {
    RedisClient.unsubscribe();
    res.status(500).json({ status: 500, message: err.message });
  }
}
