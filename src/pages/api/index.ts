import type { NextApiRequest, NextApiResponse } from "next";

function server(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    apiStatus: process.env.NODE_ENV,
  });
}

export default server;
