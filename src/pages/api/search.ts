import type { NextApiRequest, NextApiResponse } from "next";

import got from "got";
import parseBinaries from "@utils/parseBinaries";
import { urlGtfobins, CACHE_CONTROL_HEADER_VALUE } from "@config";

async function search(req: NextApiRequest, res: NextApiResponse) {
  const { binaryName: binaryNameSearch } = req.query;
  const { body } = await got(urlGtfobins);
  const binaries = parseBinaries(body);

  const result = binaries.find(
    ({ binaryName }) => binaryName === binaryNameSearch
  );

  res.setHeader("Cache-control", CACHE_CONTROL_HEADER_VALUE);
  if (!result) return res.status(404).json({ error: "notFound" });
  return res.status(200).json(result);
}

export default search;
