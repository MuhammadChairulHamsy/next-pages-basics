import { getDataProductById, getDataProducts } from "@/lib/service";
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
  const id = req.query.product?.[1];
  if(id) {
    const data = await getDataProductById("products", id);
    res.status(200).json({
      status: true,
      statusCode: 200,
      dataProduct: data
    });
  } else {
    const data = await getDataProducts("products");
    res.status(200).json({
      status: true,
      statusCode: 200,
      dataProduct: data
    });
  }
};

export default getProducts;
