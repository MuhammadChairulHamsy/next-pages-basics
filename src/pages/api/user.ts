import { NextApiRequest, NextApiResponse } from "next";

type DataUser = {
  name: string;
  age: number;
};
 const handler = (
  req: NextApiRequest,
  res: NextApiResponse<DataUser>,
) => {
  res.status(200).json({ name: "Hamsy", age: 23 }); 
};

export default handler