

import ProductView from "@/views/Product";
import type { ProductTypeProps } from "@/types/product.type";

 const ProductPage = ({products}: { products: ProductTypeProps[] }) => {
  return (
    <div>
      <ProductView products={products} error={null}  />
    </div>
  );
};
export default ProductPage;

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const data = await res.json();
  console.log(data);
  

  return {
    props: {
      products: data.dataProduct || [],
    },
  };
};
