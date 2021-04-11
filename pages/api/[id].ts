import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../server/db.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const item = db["waste-items"].find((item) => item.id === id);
  if (!item) {
    return res.status(404).json({
      status: 404,
      error: "Item not found",
    });
  }
  res.status(200).json(item);
};
