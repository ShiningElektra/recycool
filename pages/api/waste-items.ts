// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../server/db.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(db["waste-items"]);
};
