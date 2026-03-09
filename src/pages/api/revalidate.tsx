import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  error?: string;
  message?: string
};
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if(req.query.token !== process.env.REVALIDATE_TOKEN) {
        return res.status(401).json({revalidated: false, message: "Insert correct token"});
    }
  if (req.query.data === "product") {
    try {
      await res.revalidate("/product/static");
      return res.json({ revalidated: true });
    } catch (error) {
      res.status(500).json({
        error: "Errror revalidate",
        revalidated: false,
      });
    }
  }
  return res.json({ revalidated: false, message: "Select your data first" });
};

export default handler;
