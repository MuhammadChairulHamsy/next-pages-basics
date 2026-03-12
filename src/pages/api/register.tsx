import { signUp } from "@/lib/service";
import { NextApiRequest, NextApiResponse } from "next";

type DataUser = {
  status: boolean;
  message: string;
};
 const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<DataUser>,
) => {
 if(req.method === "POST") {
   await signUp(req.body, ({status, message}: {status: boolean; message: string}) => {
    if(status) {
      res.status(200).json({status, message});
    } else {
        res.status(400).json({status, message});
    }
   })
 } else {
  res.status(405).json({status: false, message: "Method not allowed"});
 }
};

export default handler