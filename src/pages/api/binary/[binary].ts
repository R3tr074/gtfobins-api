import type { NextApiRequest, NextApiResponse } from "next";
import { urlGtfobins, CACHE_CONTROL_HEADER_VALUE } from "@config";
import got from "got";
import parseFunctions from "@utils/parseFunctions";

async function binary(req: NextApiRequest, res: NextApiResponse) {
  const { binary } = req.query;
  try {
    const { body } = await got(`${urlGtfobins}/gtfobins/${binary}`);
    const functions = parseFunctions(body);
    res.setHeader("Cache-control", CACHE_CONTROL_HEADER_VALUE);
    return res.status(200).json(functions);
  } catch (error) {
    return res.status(404).json({ error: "notFound" });
  }
}

export default binary;
