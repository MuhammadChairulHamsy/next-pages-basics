import { getDataProducts } from "@/lib/service";
import { NextApiRequest, NextApiResponse } from "next";

type DataProductProps = {
  status: boolean;
  statusCode: number;
  dataProduct: any;
};
const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<DataProductProps>,
) => {
  const data = await getDataProducts("products");
  res.status(200).json({
    status: true,
    statusCode: 200,
    dataProduct: data
  });
};

export default getProducts;
